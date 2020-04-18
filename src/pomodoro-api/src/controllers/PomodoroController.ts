import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { PomodoroService } from '../services/pomodoro.service';

@Controller('pomodoro')
export class PomodoroController {
    private service: PomodoroService = new PomodoroService();

    @Get('')
    private getPomodoroList(req: Request, res: Response) {
        return this.service.ListPomodoros(req, res);
    }
    
    @Get('projects')
    private getProjects(req: Request, res: Response) {
        return this.service.GetProjects(req, res);
    }

    @Get('tasktypes')
    private getTaskTypes(req: Request, res: Response) {
        return this.service.GetTaskTypes(req, res);
    }

    @Get('codes')
    private getCodes(req: Request, res: Response) {
        return this.service.GetCodes(req, res);
    }

    @Post('')
    private addPomodoro(req: Request, res: Response) {
        Logger.Info(req.body);
        return this.service.CreatePomodoro(req, res);
    }

    @Put('')
    private updatePomodoro(req: Request, res: Response) {
        return this.service.UpdatePomodoro(req, res);
    }
}