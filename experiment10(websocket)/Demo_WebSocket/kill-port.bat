@echo off
setlocal enabledelayedexpansion

REM Default port
set PORT=8080

REM Check if port is passed as argument
if not "%1"=="" (
    set PORT=%1
)

echo Killing process on port %PORT%...
echo.

REM Find and kill process on the port
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%PORT%') do (
    set PID=%%a
    echo Found process with PID !PID! on port %PORT%
    taskkill /PID !PID! /F
    echo Process !PID! terminated.
)

echo.
echo Port %PORT% is now free.
pause
