@echo off
chcp 65001 >nul
echo ========================================
echo   推送代码到 GitHub
echo ========================================
echo.
cd /d "%~dp0"
echo 正在推送...
git push -u origin main --timeout=300
echo.
echo ========================================
echo   完成！
echo ========================================
pause
