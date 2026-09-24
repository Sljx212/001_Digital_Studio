@echo off
setlocal

where python >nul 2>&1
if errorlevel 1 (
  echo Python is required to run this local site.
  exit /b 1
)

set "SITE_DIR=%~dp0"
set "SITE_DIR=%SITE_DIR:~0,-1%"

echo.
echo 001_Digital Studio is running at http://localhost:8000/
echo Press Ctrl+C to stop the server.
echo.
python -m http.server 8000 --bind 127.0.0.1 --directory "%SITE_DIR%"
