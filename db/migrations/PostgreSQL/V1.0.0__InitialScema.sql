CREATE TABLE pomodoro(
  id serial PRIMARY KEY,
  title TEXT NOT NULL,
  created TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  objective_id INT,
  project_id INT,
  tasktype_id INT
);

CREATE TABLE objective(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE project(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE tasktype(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);