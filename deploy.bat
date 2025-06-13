@echo off
setlocal

echo ==============================
echo  Deploying to production server
echo ==============================
echo.


:: Check if the "dist" folder exists
if not exist "dist" (
    echo Error: "dist" folder not found!
    echo Make sure the project is built before deploying.
    pause
    exit /b 1
)

:: Confirm before deployment
set /p CONFIRM="Do you want to proceed with deployment? (y/n): "
if /I "%CONFIRM%" NEQ "y" (
    echo Deployment canceled.
    exit /b 0
)

:: Navigate to dist directory
cd dist\song-battle\browser || exit /b 1


:: Copy files to the server
echo Transferring files to the server...
scp -r * root@138.124.127.238:/var/www/html
if %ERRORLEVEL% NEQ 0 (
    echo Error occurred while copying files!
    pause
    exit /b 1
)

:: Restart nginx
echo Restarting Nginx on the server...
ssh root@138.124.127.238 "sudo systemctl restart nginx"
if %ERRORLEVEL% NEQ 0 (
    echo Error occurred while restarting Nginx!
    pause
    exit /b 1
)

:: Return to the original directory
cd ..

echo.
echo ==============================
echo  Deployment completed successfully!
echo ==============================
pause
exit /b 0
