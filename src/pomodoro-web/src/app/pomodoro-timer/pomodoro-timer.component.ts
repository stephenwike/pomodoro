import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PomodoroService } from '../pomodoro.service';
import { PomodoroEntity } from '../entities/pomodoro.entity';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit {

  @Output() pomodoroAdded: EventEmitter<PomodoroEntity> 
  = new EventEmitter<PomodoroEntity>();

  constructor(private service: PomodoroService) {}

  // timer fields
  interval;
  timerStarted;
  timeLeft = 25 * 60 * 1000;
  timePassed = 0;
  timerIncrement = 25 * 60 * 1000;
  timerRead;
  timerDataForm;

  // Pomodoro fields
  created;
  project;
  task;
  tasktype;
  code;
  
  ngOnInit(): void {
  }

  startTimer() {
    // Set created first time pomodoro started.
    if (!this.created) this.created = Date.now();
    this.timerRead = Date.now();

    // Start interval
    this.interval = setInterval(() => {

      // cycle until time left expires.
      if(this.timeLeft > 0) {
        let now = Date.now();

        // Determine how much time has passed since previous read.
        this.timePassed += (now - this.timerRead);
        this.timerRead = now;

        // Don't let the timer get lower than 0
        let timeTest = this.timerIncrement - this.timePassed;
        if (timeTest < 0) {
          this.timeLeft = 0;
        } else {
          this.timeLeft = timeTest;
        }

      } else {
        this.commitPomodoro();
        this.stopTimer();
        this.playAlarm();
      }
    },300);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  
  stopTimer() {
    clearInterval(this.interval);
    this.created = null;
    this.timeLeft = this.timerIncrement;
    this.timePassed = 0;
  }

  commitPomodoro() {
    let pomodoro = new PomodoroEntity();
    pomodoro.created = this.created/1000, //Needed to convert to psql
    pomodoro.project = this.project,
    pomodoro.code = this.code,
    pomodoro.task = this.task,
    pomodoro.tasktype = this.tasktype

    console.log("created {1}. project {2}, code {3}, task {4}, type {5}", 
      [ this.created, this.project, this.code, this.task, this.tasktype ])

    this.service.CreatePomodoro(pomodoro).subscribe(result => { console.log(result); });
    console.log("PomodoroTimer is emitting...");

    pomodoro.created = this.created;
    this.pomodoroAdded.emit(pomodoro);
  }

  playAlarm(){
    console.log("Going to play alarm now.");
    let audio = new Audio();
    audio.src = "../assets/audio/alarm.mp3";
    audio.load();
    audio.play();
  }
  
  validateStartButton() {
    return (this.task);
  }

  OnProjectChanged(project: string) {
    console.log("Timer reached: Value: " + project);
    this.project = project;
  }

  OnTaskTypeChanged(tasktype: string) {
    console.log("Timer reached: Value: " + tasktype);
    this.tasktype = tasktype;
  }

  OnCodeChanged(code: string) {
    console.log("Timer reached: Value: " + code);
    this.code = code;
  }
}
