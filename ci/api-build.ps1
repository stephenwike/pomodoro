#!/usr/bin/env pwsh

docker build -t stephenwike/pomodoro-api ./src/pomodoro-api/
docker push stephenwike/pomodoro-api:latest
