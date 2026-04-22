@echo off
cd /d "%~dp0"

REM Default port
set PORT=8080

REM Check if port is passed as argument
if not "%1"=="" (
    set PORT=%1
)

REM Kill existing process on the port
echo Checking for existing process on port %PORT%...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%PORT%') do (
    echo Killing process %%a on port %PORT%...
    taskkill /PID %%a /F >nul 2>&1
)

echo.
echo Starting WebSocket Application...
echo.
echo Building the project...
call mvnw.cmd clean package -DskipTests
echo.
echo Running the application on http://localhost:%PORT%
echo WebSocket endpoint: ws://localhost:%PORT%/ws
echo.
java -jar target/Demo_WebSocket-0.0.1-SNAPSHOT.jar --server.port=%PORT%
pause
