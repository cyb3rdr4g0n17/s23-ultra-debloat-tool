@echo off
title Galaxy S23 Ultra - Emergency Restore All
cd /d "%~dp0"

echo ============================================================
echo   Restoring All Packages on Galaxy S23 Ultra...
echo ============================================================
echo.

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "& '%~dp0scripts\debloat.ps1' -RestoreAll"

pause
