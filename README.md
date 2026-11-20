# S23 Ultra Debloat Toolkit

> An open-source, non-root debloating toolkit and web interface specifically configured for the **Samsung Galaxy S23 Ultra** running One UI.

🌐 **Live Web App:** [cyb3rdr4g0n17.github.io/s23-ultra-debloat-tool](https://cyb3rdr4g0n17.github.io/s23-ultra-debloat-tool/)

---

## ⚠️ Disclaimer & Liability Notice

> **IMPORTANT:** This software and documentation are provided strictly for educational and device optimization purposes. **Use at your own risk.** 
>
> Neither the author, maintainers, nor contributors accept any responsibility or liability for any damage to your device, bricking, bootloops, data loss, hardware malfunctions, or voided warranties resulting from using this software. Always back up important data before making any changes to system packages.

---

## About This Project

Generic debloat lists often remove critical packages that break essential Galaxy S23 Ultra features like **S Pen Air Actions**, **One-Handed Mode**, **Adapt Sound EQ**, or **Modes and Routines**.

This project provides a curated and safe debloating preset for the Galaxy S23 Ultra:
- **Zero Root Needed:** Uses standard Android Debug Bridge (`pm uninstall -k --user 0`).
- **100% Reversible:** System APKs are never deleted from `/system`; you can restore any app anytime with `cmd package install-existing`.
- **Pre-Audited 35 Packages:** Clearly divided into **Safe** (18), **Optional** (14), and **Caution / Traps** (3).
- **Two Ways to Run:**
  1. **Web App (Zero-Install):** Connect via WebUSB in Chrome, Edge, or Brave directly from your browser.
  2. **Windows 1-Click Script:** Double-click `debloat.bat` on any PC or laptop (auto-configures ADB).

---

## Repository Structure

```text
s23-ultra-debloat-tool/
├── index.html                    # Root Web App (GitHub Pages entry)
├── style.css                     # Modern dark theme UI
├── app.js                        # WebUSB connection & ADB generator
├── debloat.bat                   # 1-Click Windows launcher
├── restore.bat                   # 1-Click emergency package restore
├── scripts/
│   └── debloat.ps1               # Interactive PowerShell engine
├── data/
│   ├── s23_ultra_preset.json     # 35 package JSON preset
│   └── packages_metadata.json    # Categorized metadata and impact explanations
├── S23_Ultra_Debloat_Impact_Table.csv # Full package audit spreadsheet
├── .nojekyll                     # Ensures GitHub Pages serves static files
└── README.md
```

---

## How to Use

### Method 1: Web App (Chrome / Edge / Brave)

1. Connect your S23 Ultra to your PC with a USB cable.
2. Enable **USB Debugging** (*Settings > Developer options > USB debugging*).
3. Visit the live site: **[cyb3rdr4g0n17.github.io/s23-ultra-debloat-tool](https://cyb3rdr4g0n17.github.io/s23-ultra-debloat-tool/)**
4. Click **Connect Phone (WebUSB)** and tap **Allow** on your phone screen.
5. Choose packages and click **Uninstall Selected** (or **Copy ADB Shell Script**).

### Method 2: Windows Double-Click Script

1. Plug in your phone with USB Debugging enabled.
2. Double-click **`debloat.bat`**.
3. Select an option:
   - `[1] Safe Debloat`: Removes Meta services, Knox analytics, and setup bloat (18 apps).
   - `[2] Guided Debloat`: Prompts you for Bixby, AR Emoji, and S Pen tools.
   - `[4] Restore All`: Reinstalls all 35 packages to factory defaults.

---

## Package Breakdown

| Tier | Count | Description |
| :--- | :--- | :--- |
| **🟢 Safe to Remove** | 18 | Meta services (`facebook.system`, `appmanager`, `services`), Knox analytics uploader, Rubin engine, carrier bookmarks, setup stubs. |
| **🟡 Optional Features** | 14 | Bixby voice & wake-up, Bixby Vision, ARCore, S Pen Live Messages, Live Wallpapers, Digital car key. |
| **🔴 Caution / Traps** | 3 | `easyonehand` (One-Handed Mode), `hearingadjust` (Adapt Sound EQ), `youtube`. *(Kept unchecked by default).* |

---

## Restoring Packages

If you ever want an app back, run:
```bash
adb shell cmd package install-existing <package.name>
```
Or double-click **`restore.bat`** to restore all 35 packages.
