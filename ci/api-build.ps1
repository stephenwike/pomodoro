#!/usr/bin/env pwsh

./ci/update-version.ps1

$version = Get-Content -Path version

docker build -t stephenwike/pomodoro-api:$version `
    -t stephenwike/pomodoro-api:latest ./src/pomodoro-api/
docker push stephenwike/pomodoro-api:$version 
docker push stephenwike/pomodoro-api:latest
