@echo off
REM Run this ONCE from project root to remove PPP Data from git and push successfully.
REM This creates a fresh history (one commit). Your PPP Data folder stays on disk but is not in the repo.
echo Making fresh branch without PPP Data...
git checkout --orphan temp_main
REM Clear index so PPP Data is not carried over from old branch
git reset
git add -A
REM Ensure PPP Data is not in index
git rm -r --cached "PPP Data" 2>nul
git add .gitignore
git commit -m "Project without PPP Data (site uses public/ only)"
git branch -D main
git branch -m main
echo.
echo Pushing to GitHub (force, because history was replaced)...
git push -f origin main
echo.
echo Done. You can delete this file (reset-history-and-push.bat) now.
pause
