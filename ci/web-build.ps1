#!/usr/bin/env pwsh

docker build -t stephenwike/pomodoro-web:latest ./src/pomodoro-web/
docker push stephenwike/pomodoro-web:latest
