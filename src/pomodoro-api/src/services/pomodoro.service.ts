import { Request, Response } from 'express';
import { OK, BAD_REQUEST } from 'http-status-codes';
import { Logger } from '@overnightjs/logger';
import { PomodoroEntity } from '../entities/pomodoro.entitiy';

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'user',
    host: 'fireshellstudio.us',
    database: 'pomodoro',
    password: 'pass',
    port: 5432,
});

export class PomodoroService {

    ListPomodoros(req: Request, res: Response) {
        pool.query('SELECT id, created, project, task, tasktype, code FROM public.pomodoro;',
        (error, result) =>  {
            if (error) {
                Logger.Err(error, true);
                return res.status(400).json("Could not fetch list.");
            } else {
                return res.status(200).json(result.rows);
            }
        });
    };

    GetProjects(req: Request, res: Response) {
        pool.query('SELECT project FROM projects;',
        (error, result) =>  {
            if (error) {
                Logger.Err(error, true);
                return res.status(400).json("Could not fetch list.");
            } else {
                return res.status(200).json(result.rows);
            }
        });
    }

    GetTaskTypes(req: Request, res: Response) {
        pool.query('SELECT tasktype FROM tasktypes;',
        (error, result) =>  {
            if (error) {
                Logger.Err(error, true);
                return res.status(400).json("Could not fetch list.");
            } else {
                return res.status(200).json(result.rows);
            }
        });
    }

    GetCodes(req: Request, res: Response) {
        pool.query('SELECT code FROM codes;',
        (error, result) =>  {
            if (error) {
                Logger.Err(error, true);
                return res.status(400).json("Could not fetch list.");
            } else {
                return res.status(200).json(result.rows);
            }
        });
    }

    CreatePomodoro(req: Request, res: Response) {
        let pomodoro = new PomodoroEntity(req.body);
        pool.query('INSERT INTO pomodoro (created, project, task, tasktype, code) VALUES (to_timestamp($1), $2, $3, $4, $5);',
        [ req.body.created, req.body.project, req.body.task, req.body.tasktype, req.body.code ],
        (error, result) =>  {
            if (error) {
                Logger.Err(error, true);
                return res.status(400).json(false);
            }
        });
        return res.status(200).json(true);
    };

    UpdatePomodoro(req: Request, res: Response) {
        let field = req.body.field;
        let value = req.body.value;
        let index = req.body.index;
        Logger.Info(`Field: ${field}, Value: ${value}, Index: ${index}`)
        pool.query(`UPDATE pomodoro SET ${field}=$1 WHERE id=$2;`,
        [ value, index ],
        (error, result) =>  {
            if (error) {
                Logger.Err(error, true);
                return res.status(400).json(false);
            }
        });
        return res.status(200).json(true);
    }
}

