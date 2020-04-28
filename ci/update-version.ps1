#!/usr/bin/env pwsh

$version = Get-Content -Path version
$version -match "^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$";
$major = [int]$matches['major']
$minor = [int]$matches['minor']
$patch = [int]$matches['patch'] + 1
$newVersion = "${major}.${minor}.${patch}"

Set-Content -Path version -Value $newVersion -PassThru | Write-Output
