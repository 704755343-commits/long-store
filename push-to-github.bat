@echo off
chcp 65001 >nul
echo ========================================
echo   推送代码到 GitHub
echo ========================================
echo.
cd /d "%~dp0"
echo 正在推送，请稍候...
echo.
git push -u origin main
echo.
echo ========================================
echo   如果推送成功，会显示...
echo   * [new branch]    main -> main
echo   Branch 'main' set up to track remote branch 'main' from 'origin'.
echo ========================================
pause
