@echo off
title Galaxy S23 Ultra Debloat Toolkit
cd /d "%~dp0"

echo ============================================================
echo   Launching Galaxy S23 Ultra Debloat Tool...
echo ============================================================
echo.

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\debloat.ps1"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Script encountered an issue or was closed.
    pause
)
