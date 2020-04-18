INSERT INTO pomodoro(created, project, task, tasktype, code)
	VALUES (to_timestamp(1587139675), 'bct-helm-atlas', 'Create the data for pomodoro testing.', 'Develop', '603083|Orion'),
        (to_timestamp(1587827382), 'bct-nservicebus', 'Research how to enter multiple rows.', 'Research', 'NC1|R&D Indirect'),
        (to_timestamp(1588827654), 'bct-flyway-base', 'Test to make sure the data is accurate.', 'Testing', 'NC2|Admin');

INSERT INTO projects(project)
    VALUES ('bct-nservicebus'), ('bct-helm-atlas'), ('bct-flyway-base'), ('n/a');

INSERT INTO codes(code)
    VALUES ('603083|Orion'), ('NC1|R&D Indirect'), ('NC2|Admin');

INSERT INTO tasktypes(tasktype)
    VALUES ('Develop'), ('Debug'), ('Admin'), ('Training'), ('Research'), ('Testing');

