using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Pomodoro.WebApi.Models;
using Pomodoro.WebApi.Services;

namespace Pomodoro.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PomodoroController : ControllerBase
    {
        private readonly ILogger<PomodoroController> _logger;
        private IPomodoroService _service;

        [HttpGet]
        public IActionResult GetPomodoro()
        {
            try
            {
                //_service.GetPomodoro();
                _logger.LogInformation("Scores successfully set.");
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError("Exception thrown while trying to set player scores. {exception}", ex);
                return StatusCode(500);
            }
        }
        /*
         * 
         *     @Get('')
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
         */
    }
}
