import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PomodoroService } from '../../services/pomodoro.service';
import { CodeEntity } from '../../entities/code.entity';
import { TaskTypeEntity } from '../../entities/tasktype.entity';
import { ProjectEntity } from '../../entities/project.entity';

@Component({
  selector: 'app-pomodoro-attributes',
  templateUrl: './pomodoro-attributes.component.html',
  styleUrls: ['./pomodoro-attributes.component.css']
})
export class PomodoroAttributesComponent implements OnInit {

  @Input() project: string;
  @Input() tasktype: string;
  @Input() code: string;

  @Output() projectChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() tasktypeChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() codeChanged: EventEmitter<string> = new EventEmitter<string>();
  
  projects: ProjectEntity[];
  tasktypes: TaskTypeEntity[];
  codes: CodeEntity[];

  constructor(private service: PomodoroService) { }

  ngOnInit(): void {
    this.service.GetProjects().subscribe(projects => { this.projects = projects });
    this.service.GetTaskTypes().subscribe(tasktypes => { this.tasktypes = tasktypes });
    this.service.GetCodes().subscribe(codes => { this.codes = codes });
  }

  OnProjectChanged() {
    console.log("OnProjectChanged reached. Payload: " + this.project);
    this.projectChanged.emit(this.project);
  }

  OnTaskTypeChanged() {
    console.log("OnTaskTypeChanged reached. Payload: " + this.tasktype);
    this.tasktypeChanged.emit(this.tasktype);
  }

  OnCodeChanged() {
    console.log("OnCodeChanged reached. Payload: " + this.code);
    this.codeChanged.emit(this.code);
  }
}
