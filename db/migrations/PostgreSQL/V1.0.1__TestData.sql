INSERT INTO objective(title)
	VALUES ('The first objective'),
  ('The second objective'),
  ('The third objective');

INSERT INTO project(title)
	VALUES ('Project A'),
  ('Project B'),
  ('Project C');

INSERT INTO tasktype(title)
	VALUES ('Development'),
  ('Impact Analysis'),
  ('Administrative'),
  ('Training'),
  ('Documentation'),
  ('Testing');

INSERT INTO pomodoro(title, project_id, tasktype_id, objective_id)
	VALUES ('Something that got worked on', 1, 2, 1),
  ('Something else that got worked on', 2, 2, 2),
  ('Something third thing that got worked on', 1, 1, 1),
  ('Something different thing that got worked on', 1, 4, 2);