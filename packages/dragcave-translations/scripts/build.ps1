[CmdletBinding()]
param (
    [Parameter()]
    [Switch]
    $Prod
)

if (-not $env:npm_execpath) {
    Write-Warning "This script is not intended to be executed directly. Please use `yarn build` instead."
}

if ($Prod) {
    vite build --mode PROD
}
else {
    vite build
}

if ($LASTEXITCODE) { exit $LASTEXITCODE }
