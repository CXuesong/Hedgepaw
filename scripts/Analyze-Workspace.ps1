Import-Module $PSScriptRoot/Utilities.psm1

Write-Host "Lint workspace"
yarn lint
checkLastExitCode
