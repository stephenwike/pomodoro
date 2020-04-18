#!/usr/bin/env pwsh

docker build -t db-tools -f db/Dockerfile .

docker run db-tools --type PostgreSQL --action DropDb --server "fireshellstudio.us" --port 5432 --database pomodoro --username "user" --password "pass"
docker run db-tools --type PostgreSQL --action CreateDb --server "fireshellstudio.us" --port 5432 --database pomodoro --username "user" --password "pass"
docker run db-tools --type PostgreSQL --action MigrateDb --server "fireshellstudio.us" --port 5432 --database pomodoro --username "user" --password "pass"