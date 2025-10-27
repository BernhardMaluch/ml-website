<#
Simple helper to push the current contents of this folder to a `gh-pages` branch.
Use with caution: it force-pushes the branch.
Review and understand before running.
#>
param(
  [string]$Remote = 'origin',
  [string]$Branch = 'gh-pages'
)

$pwd = Get-Location
Write-Host "Preparing deploy from $pwd to $Remote/$Branch"

# Create a temporary orphan branch, commit and force-push it to the remote.
Write-Host 'This will create an orphan branch locally and force-push to the remote. Press Enter to continue or Ctrl+C to abort.'
Read-Host

# Create an orphan branch
git checkout --orphan $Branch
# Remove all tracked files from index
git rm -rf --cached . > $null 2>&1
# Add all files
git add -A
git commit -m "Deploy site to $Branch" || Write-Host 'Nothing to commit'
# Force-push
git push $Remote $Branch --force

# Return to main branch
git checkout -f main
Write-Host "Deployed to $Remote/$Branch"
