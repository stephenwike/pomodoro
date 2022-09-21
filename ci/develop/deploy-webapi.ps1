#!/usr/bin/env pwsh

Write-Host "Deploying WebApi Locally"

Push-Location ./src/pomodoro-webapi/Pomodoro.WebApi
    dotnet publish -o ../publish/Pomodoro.WebApi
Pop-Location

Push-Location ./src/pomodoro-webapi/publish/Pomodoro.WebApi
   Start-Process dotnet Pomodoro.WebApi.dll
Pop-Location