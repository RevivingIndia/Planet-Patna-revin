@echo off
REM Optimize images in public/archives for faster loading on /archives/collection
REM Requires: Python with Pillow (pip install -r "..\python-image-resolution\requirements.txt")

set SCRIPT_DIR=%~dp0
set PROJECT_ROOT=%SCRIPT_DIR%..
set OPTIMIZER=%PROJECT_ROOT%\..\python-image-resolution\optimize_images.py
set ARCHIVES=%PROJECT_ROOT%\public\archives

if not exist "%OPTIMIZER%" (
  echo Not found: %OPTIMIZER%
  echo Ensure path: C:\YouTube Content\Project\Planet Patna\python-image-resolution\optimize_images.py
  pause
  exit /b 1
)

if not exist "%ARCHIVES%" (
  echo Not found: %ARCHIVES%
  pause
  exit /b 1
)

echo Optimizing images in public\archives ...
python "%OPTIMIZER%" "%ARCHIVES%" --in-place
echo.
pause
