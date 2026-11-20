<#
.SYNOPSIS
    Interactive S23 Ultra Debloat & Optimization Tool
.DESCRIPTION
    Safely debloats Samsung Galaxy S23 Ultra devices without root access.
    Supports auto-downloading ADB, interactive safety tiers, and 1-click restore.
#>

[CmdletBinding()]
param (
    [switch]$RestoreAll,
    [switch]$SafeOnly
)

$Host.UI.RawUI.WindowTitle = "Galaxy S23 Ultra Debloat Tool"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$MetadataPath = Join-Path $ProjectRoot "data\packages_metadata.json"
$AdbLocalDir = Join-Path $ProjectRoot ".adb\platform-tools"
$AdbExe = "adb"

function Write-Header {
    Clear-Host
    Write-Host "============================================================" -ForegroundColor Cyan
    Write-Host "      SAMSUNG GALAXY S23 ULTRA DEBLOAT TOOLKIT" -ForegroundColor White -NoNewline
    Write-Host "  v1.0" -ForegroundColor Yellow
    Write-Host "      Non-Root | Reversible | Knox & Warranty Safe" -ForegroundColor DarkCyan
    Write-Host "============================================================" -ForegroundColor Cyan
    Write-Host ""
}

function Ensure-Adb {
    # Check if adb is available in PATH
    $adbCmd = Get-Command adb -ErrorAction SilentlyContinue
    if ($adbCmd) {
        $script:AdbExe = "adb"
        return $true
    }

    # Check if adb is downloaded locally
    $localAdb = Join-Path $AdbLocalDir "adb.exe"
    if (Test-Path $localAdb) {
        $script:AdbExe = $localAdb
        return $true
    }

    Write-Host "[!] ADB was not found on your system." -ForegroundColor Yellow
    Write-Host "    Would you like to automatically download Google's official" -ForegroundColor White
    Write-Host "    Android SDK Platform-Tools for Windows into this folder?" -ForegroundColor White
    $confirm = Read-Host "    Download ADB automatically? (Y/n)"
    if ($confirm -eq "" -or $confirm -match "^[yY]") {
        Write-Host "[-] Downloading platform-tools from Google..." -ForegroundColor Cyan
        $zipPath = Join-Path $ProjectRoot ".adb\platform-tools.zip"
        New-Item -ItemType Directory -Force -Path (Split-Path $zipPath) | Out-Null
        $url = "https://dl.google.com/android/repository/platform-tools-latest-windows.zip"
        
        try {
            [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
            Invoke-WebRequest -Uri $url -OutFile $zipPath -UseBasicParsing
            Write-Host "[-] Extracting platform-tools..." -ForegroundColor Cyan
            Expand-Archive -Path $zipPath -DestinationPath (Split-Path -Parent $AdbLocalDir) -Force
            Remove-Item $zipPath -Force
            $script:AdbExe = $localAdb
            Write-Host "[✓] ADB successfully installed locally!" -ForegroundColor Green
            Start-Sleep -Seconds 1
            return $true
        } catch {
            Write-Host "[X] Failed to auto-download ADB: $_" -ForegroundColor Red
            return $false
        }
    } else {
        Write-Host "[X] Cannot continue without ADB. Please install ADB and re-run." -ForegroundColor Red
        return $false
    }
}

function Check-Device {
    Write-Host "[-] Checking for connected Android device..." -ForegroundColor Gray
    & $script:AdbExe start-server | Out-Null
    $devicesOutput = & $script:AdbExe devices
    $lines = $devicesOutput -split "`r?`n" | Where-Object { $_ -match "\S" } | Select-Object -Skip 1

    if (-not $lines -or $lines.Count -eq 0) {
        Write-Host "[!] No device detected!" -ForegroundColor Yellow
        Write-Host "    1. Connect your S23 Ultra via USB cable." -ForegroundColor White
        Write-Host "    2. Make sure USB Debugging is ENABLED in Developer Options." -ForegroundColor White
        Write-Host "    3. Unlock your phone screen." -ForegroundColor White
        Read-Host "    Press ENTER to retry detection..."
        return (Check-Device)
    }

    $firstDevice = $lines[0] -split "\t"
    $serial = $firstDevice[0].Trim()
    $status = $firstDevice[1].Trim()

    if ($status -eq "unauthorized") {
        Write-Host "[!] Device unauthorized: $serial" -ForegroundColor Yellow
        Write-Host "    Please check your phone screen and tap 'Always Allow' for USB debugging!" -ForegroundColor Cyan
        Read-Host "    Press ENTER once authorized..."
        return (Check-Device)
    }

    $model = (& $script:AdbExe -s $serial shell getprop ro.product.model).Trim()
    $brand = (& $script:AdbExe -s $serial shell getprop ro.product.brand).Trim()
    $oneui = (& $script:AdbExe -s $serial shell getprop ro.build.version.oneui).Trim()
    if (-not $oneui) { $oneui = "One UI" }

    Write-Host "[✓] Device Connected: $brand $model ($serial)" -ForegroundColor Green
    Write-Host "    Software: $oneui (Android $(& $script:AdbExe -s $serial shell getprop ro.build.version.release))" -ForegroundColor Gray
    Write-Host ""
    return $serial
}

function Load-Metadata {
    if (Test-Path $MetadataPath) {
        return (Get-Content $MetadataPath -Raw | ConvertFrom-Json)
    } else {
        Write-Host "[X] Error: Could not find package metadata at $MetadataPath" -ForegroundColor Red
        exit 1
    }
}

function Uninstall-PackageList ($serial, $packages, $title) {
    Write-Host "`n=== Executing: $title ===" -ForegroundColor Cyan
    Write-Host "Total packages to process: $($packages.Count)`n" -ForegroundColor Gray

    $successCount = 0
    $skipCount = 0

    foreach ($pkg in $packages) {
        Write-Host "  [-] Removing: " -NoNewline -ForegroundColor Gray
        Write-Host "$($pkg.name) " -NoNewline -ForegroundColor White
        Write-Host "($($pkg.id))... " -NoNewline -ForegroundColor DarkGray

        $res = & $script:AdbExe -s $serial shell pm uninstall -k --user 0 $pkg.id 2>&1
        if ($res -match "Success") {
            Write-Host "SUCCESS" -ForegroundColor Green
            $successCount++
        } elseif ($res -match "not installed for 0") {
            Write-Host "ALREADY REMOVED" -ForegroundColor Yellow
            $skipCount++
        } else {
            Write-Host "SKIPPED ($res)" -ForegroundColor DarkGray
            $skipCount++
        }
    }

    Write-Host "`n[✓] Done! $successCount removed, $skipCount already uninstalled/skipped." -ForegroundColor Green
    Write-Host "    Tip: Reboot your phone to flush background processes." -ForegroundColor Cyan
}

function Restore-PackageList ($serial, $packages) {
    Write-Host "`n=== Restoring Packages ===" -ForegroundColor Cyan
    Write-Host "Total packages to restore: $($packages.Count)`n" -ForegroundColor Gray

    $restored = 0
    foreach ($pkg in $packages) {
        Write-Host "  [-] Restoring: " -NoNewline -ForegroundColor Gray
        Write-Host "$($pkg.name) " -NoNewline -ForegroundColor White
        Write-Host "($($pkg.id))... " -NoNewline -ForegroundColor DarkGray

        $res = & $script:AdbExe -s $serial shell cmd package install-existing $pkg.id 2>&1
        if ($res -match "installed for user") {
            Write-Host "RESTORED" -ForegroundColor Green
            $restored++
        } else {
            Write-Host "ACTIVE / OK" -ForegroundColor DarkGray
        }
    }

    Write-Host "`n[✓] Restoration completed ($restored restored)!" -ForegroundColor Green
}

# MAIN EXECUTION
Write-Header
if (-not (Ensure-Adb)) { exit 1 }
$serial = Check-Device
$packages = Load-Metadata

if ($RestoreAll) {
    Restore-PackageList $serial $packages
    exit 0
}

if ($SafeOnly) {
    $safePkgs = $packages | Where-Object { $_.tier -eq "safe" }
    Uninstall-PackageList $serial $safePkgs "Safe Debloat"
    exit 0
}

# Interactive Menu Loop
while ($true) {
    Write-Header
    Write-Host "Target Device: $serial" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Choose Debloat Mode:" -ForegroundColor White
    Write-Host "  [1] SAFE Debloat (18 Apps - Recommended)" -ForegroundColor Green
    Write-Host "      Removes Meta background daemons, Knox analytics, telemetry, carrier stubs."
    Write-Host "      100% risk-free. No hardware or feature breakage." -ForegroundColor DarkGray
    Write-Host ""
    Write-Host "  [2] Guided / Interactive Debloat" -ForegroundColor Cyan
    Write-Host "      Runs Safe Debloat, then asks you step-by-step about Bixby, AR, and S Pen."
    Write-Host ""
    Write-Host "  [3] Complete Preset Debloat (All 35 Apps)" -ForegroundColor Red
    Write-Host "      Removes all 35 apps. Includes safety prompts for YouTube, Adapt Sound & One-Hand."
    Write-Host ""
    Write-Host "  [4] RESTORE All 35 Apps (Instant Revert)" -ForegroundColor Magenta
    Write-Host "      Reinstalls all uninstalled packages back to factory state."
    Write-Host ""
    Write-Host "  [5] Custom Package Selector" -ForegroundColor Yellow
    Write-Host "      Toggle any specific package on/off."
    Write-Host ""
    Write-Host "  [0] Exit" -ForegroundColor Gray
    Write-Host ""
    
    $choice = Read-Host "Select an option (0-5)"

    switch ($choice) {
        "1" {
            $safePkgs = $packages | Where-Object { $_.tier -eq "safe" }
            Uninstall-PackageList $serial $safePkgs "Safe Debloat (18 Apps)"
            Read-Host "`nPress ENTER to return to menu..."
        }
        "2" {
            $chosen = [System.Collections.Generic.List[PSObject]]::new()
            # Add safe
            $packages | Where-Object { $_.tier -eq "safe" } | ForEach-Object { $chosen.Add($_) }
            
            Write-Host "`n--- Optional Features ---" -ForegroundColor Cyan
            
            $bixby = Read-Host "Do you want to REMOVE Bixby Voice & Wake-up? (y/N)"
            if ($bixby -match "^[yY]") {
                $packages | Where-Object { $_.category -eq "Bixby & Assistants" } | ForEach-Object { $chosen.Add($_) }
            }

            $ar = Read-Host "Do you want to REMOVE AR Emoji & ARCore? (y/N)"
            if ($ar -match "^[yY]") {
                $packages | Where-Object { $_.id -in @("com.samsung.android.aremoji", "com.google.ar.core") } | ForEach-Object { $chosen.Add($_) }
            }

            $spen = Read-Host "Do you want to REMOVE S Pen Live Messages drawing? (y/N)"
            if ($spen -match "^[yY]") {
                $packages | Where-Object { $_.id -eq "com.samsung.android.service.livedrawing" } | ForEach-Object { $chosen.Add($_) }
            }

            $wall = Read-Host "Do you want to REMOVE AI & Live Wallpapers? (y/N)"
            if ($wall -match "^[yY]") {
                $packages | Where-Object { $_.id -in @("com.google.android.apps.aiwallpapers", "com.samsung.android.wallpaper.live") } | ForEach-Object { $chosen.Add($_) }
            }

            Uninstall-PackageList $serial $chosen "Guided Custom Debloat ($($chosen.Count) Apps)"
            Read-Host "`nPress ENTER to return to menu..."
        }
        "3" {
            Write-Host "`n[!] WARNING: This will remove all 35 packages including YouTube, Adapt Sound, and One-Handed Mode." -ForegroundColor Yellow
            $confirm = Read-Host "Are you absolutely sure you want to remove ALL 35 apps? (type 'YES')"
            if ($confirm -eq "YES") {
                Uninstall-PackageList $serial $packages "Complete 35 App Debloat"
            } else {
                Write-Host "Action cancelled." -ForegroundColor Gray
            }
            Read-Host "`nPress ENTER to return to menu..."
        }
        "4" {
            Restore-PackageList $serial $packages
            Read-Host "`nPress ENTER to return to menu..."
        }
        "5" {
            # Simple selector
            Write-Host "`nListing all 35 packages:" -ForegroundColor Cyan
            for ($i = 0; $i -lt $packages.Count; $i++) {
                $p = $packages[$i]
                $color = if ($p.tier -eq "safe") { "Green" } elseif ($p.tier -eq "caution") { "Red" } else { "Yellow" }
                Write-Host "[$($i+1)] [$($p.tier.ToUpper())] $($p.name) ($($p.id))" -ForegroundColor $color
            }
            $inputIndices = Read-Host "`nEnter package numbers to uninstall separated by commas (e.g. 1,3,5) or 'q' to cancel"
            if ($inputIndices -ne "q" -and $inputIndices -ne "") {
                $selectedPkgs = [System.Collections.Generic.List[PSObject]]::new()
                $indices = $inputIndices -split ","
                foreach ($idx in $indices) {
                    $num = 0
                    if ([int]::TryParse($idx.Trim(), [ref]$num) -and $num -ge 1 -and $num -le $packages.Count) {
                        $selectedPkgs.Add($packages[$num - 1])
                    }
                }
                if ($selectedPkgs.Count -gt 0) {
                    Uninstall-PackageList $serial $selectedPkgs "Custom Selected ($($selectedPkgs.Count) Apps)"
                }
            }
            Read-Host "`nPress ENTER to return to menu..."
        }
        "0" {
            Write-Host "`nExiting. Thank you for using S23 Ultra Debloat Tool!" -ForegroundColor Green
            exit 0
        }
        default {
            Write-Host "Invalid choice, please select 0-5." -ForegroundColor Red
            Start-Sleep -Seconds 1
        }
    }
}
