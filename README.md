# S23 Ultra Debloat Toolkit

A non-root debloating toolkit and web interface specifically configured for the **Samsung Galaxy S23 Ultra**.

## Features

- **No Root Required**: Uses standard ADB (`pm uninstall -k --user 0`).
- **100% Reversible**: System files remain intact on partition; restore any package anytime with `cmd package install-existing`.
- **Pre-Audited 35 Packages**: Categorized into Safe, Optional, and Caution (protecting One-Handed Mode, Adapt Sound, and YouTube).
- **Turnkey Windows Scripts**: Double-click `debloat.bat` on any PC. Automatically downloads Google Platform-Tools locally if ADB is missing.
- **Web App**: Direct browser interface in `web/index.html` supporting WebUSB and 1-click ADB command generation.

## Project Structure

```text
AndroidDebloat/
├── data/
│   ├── s23_ultra_preset.json     # Raw 35 package list
│   └── packages_metadata.json    # Categorized metadata and impact explanations
├── scripts/
│   └── debloat.ps1               # Interactive PowerShell engine
├── web/
│   ├── index.html                # Modern Web App interface
│   ├── style.css                 # Dark theme UI
│   └── app.js                    # WebUSB connection & package manager
├── debloat.bat                   # Double-click launcher for Windows
├── restore.bat                   # Emergency 1-click package restore
└── S23_Ultra_Debloat_Impact_Table.csv
```

## Quick Start

### Option A: Windows Double-Click (Recommended for PC)

1. Connect your S23 Ultra via USB cable.
2. Ensure **USB Debugging** is toggled ON under *Settings > Developer options*.
3. Double-click **`debloat.bat`**.
4. Select your preferred mode:
   - `[1] Safe Debloat`: Removes Meta services, Knox telemetry, and setup bloat (18 packages).
   - `[2] Guided Debloat`: Prompts you for Bixby, AR emoji, and S Pen tools.
   - `[4] Restore All`: Restores all 35 packages instantly.

### Option B: Web App (Chrome / Edge / Brave)

1. Open `web/index.html` in your browser.
2. Click **Connect Phone (WebUSB)** and select your phone.
3. Review the categorized lists, toggle what you need, and click **Uninstall Selected**.
4. You can also click **Copy ADB Shell Script** to paste commands directly into a terminal.

## Package Safety Breakdown

| Category | Count | Typical Packages |
| :--- | :--- | :--- |
| **Safe (18)** | Meta services (`facebook.system`, `appmanager`, `services`), Knox analytics uploader, Rubin engine, carrier stubs. |
| **Optional (14)** | Bixby voice & wake-up, Bixby Vision, ARCore, S Pen Live Messages, Live Wallpapers, Digital car key. |
| **Caution (3)** | `easyonehand` (One-Handed Mode), `hearingadjust` (Adapt Sound), `youtube`. |

## Restoring Packages

To bring back any package, run via ADB:
```bash
adb shell cmd package install-existing <package.name>
```
Or simply run `restore.bat`.
