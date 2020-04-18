CREATE TABLE pomodoro(
  id serial PRIMARY KEY,
  created TIMESTAMPTZ NOT NULL,
  project varchar,
  task varchar,
  tasktype varchar,
  code varchar
);

CREATE TABLE codes(
  id serial PRIMARY KEY,
  code varchar NOT NULL
);

CREATE TABLE projects(
  id serial PRIMARY KEY,
  project varchar NOT NULL
);

CREATE TABLE tasktypes(
  id serial PRIMARY KEY,
  tasktype varchar NOT NULL
);