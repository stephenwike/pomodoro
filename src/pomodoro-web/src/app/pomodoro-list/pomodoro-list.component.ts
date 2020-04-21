import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { PomodoroService } from '../pomodoro.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PomodoroEntity } from '../entities/pomodoro.entity';
import { MatTableDataSource } from '@angular/material/table';
import { StatisticsModel } from '../entities/statistics.model';

@Component({
  selector: 'app-pomodoro-list',
  templateUrl: './pomodoro-list.component.html',
  styleUrls: ['./pomodoro-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PomodoroListComponent implements OnInit, OnChanges {

  @Input() pomodoroList: PomodoroEntity[];
  @Output() listFiltered: EventEmitter<StatisticsModel> 
    = new EventEmitter<StatisticsModel>();
  
  columnsToDisplay = ['number', 'task'];
  expandedElement: PomodoroEntity | null;
  dataSource = new MatTableDataSource<PomodoroEntity>([]);

  calendarStart: number;
  startDate: number;
  endDate: number;

  constructor(private service: PomodoroService) { }

  ngOnInit(): void {
    // Get previous sunday
    
    //let now = new Date(Date.now());
    let now = new Date('1/29/20, 7:13 AM');//temporary TODO: Remove this
    
    let date = now.getDate();
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    this.startDate = now.setDate(date-day);
    this.endDate = now.setDate(date-day+7) - 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("PomodoroListComponent OnChanges reached!");
    if(changes.pomodoroList.currentValue != changes.pomodoroList.previousValue)
    {
      console.log("PomodoroListComponent pomodoroList changes recognized!");
      // console.log(`Before: ${changes.pomodoroList.previousValue}, After: ${changes.pomodoroList.currentValue}`);
      console.log(`This Pomodoro List length: ${this.pomodoroList.length}`)
      this.dataSource.data = this.GetPomodoroRange(this.pomodoroList);
    }
  }

  GetPomodoroRange(data: PomodoroEntity[]): PomodoroEntity[] {
    console.log(`Filtering and sorting ${data.length} pomodoros`);

    let filtered = data.filter(values => { 
      let created = new Date(values.created).valueOf();
      //console.log(`Created: ${created}, Start: ${this.startDate}, End: ${this.endDate}`);
      return (created > this.startDate && created < this.endDate)
    });

    let sorted = filtered.sort((a, b) => {
      let aTime = new Date(a.created).valueOf();
      let bTime = new Date(b.created).valueOf();
      return bTime - aTime; 
    });

    let length = sorted.length;
    let labeled = sorted.forEach(item => {
      item.listNumber = length--;
    })

    console.log(`Returning ${filtered.length} pomodoros.`);

    // Emit changes for statistics
    let statsModel = new StatisticsModel();
    statsModel.pomodoros = filtered;
    statsModel.beginDate = this.startDate;
    statsModel.endDate = this.endDate;
    this.listFiltered.emit(statsModel);

    return filtered;
  }

  OnProjectUpdated(dataIndex: number, project: string) {
    console.log("Project changed at index {1}, to {2}", [ dataIndex, project ]);
    this.dataSource.data[dataIndex].projectChanged = project;
  }

  OnTaskTypeUpdated(dataIndex: number, tasktype: string) {
    console.log("Task Type changed at index {1}, to {2}", [ dataIndex, tasktype ]);
    this.dataSource.data[dataIndex].tasktypeChanged = tasktype;
  }

  OnCodeUpdated(dataIndex: number, code: string) {
    console.log("Code changed at index {1}, to {2}", [ dataIndex, code ]);
    this.dataSource.data[dataIndex].codeChanged = code;
  }

  CommitChanges(dataIndex: number) {
    if(!this.dataSource) { return; }
    let data = this.dataSource.data[dataIndex];
    if(data.projectChanged && data.project != data.projectChanged)
    {
      let value = data.projectChanged;
      let id = data.id;
      console.log("Project Changed:" + value);
      this.service.UpdatePomodoro("project", value, id)
        .subscribe(result => {if(result) { data.project = value; }});
    }
    if(data.tasktypeChanged && data.tasktype != data.tasktypeChanged)
    {
      let value = data.tasktypeChanged;
      let id = data.id;
      console.log("Task Type Changed:" + value);
      this.service.UpdatePomodoro("tasktype", value, id)
        .subscribe(result => {if(result) { data.tasktype = value; }});
    }
    if(data.codeChanged && data.code != data.codeChanged)
    {
      let value = data.codeChanged;
      let id = data.id;
      console.log("Code Changed:" + value);
      this.service.UpdatePomodoro("code", value, id)
        .subscribe(result => {if(result) { data.code = value; }});
    }
  }

  HasChanges(dataIndex: number): boolean {
    if (!this.dataSource) return false;
    let context = this.dataSource.data[dataIndex];
    if(context.projectChanged && context.project != context.projectChanged) { return true; }
    if(context.tasktypeChanged && context.tasktype != context.tasktypeChanged) { return true; }
    if(context.codeChanged && context.code != context.codeChanged) { return true; }
    return false;
  }

  ForwardDate() {
    if (this.endDate < Date.now()) {
      this.startDate = this.endDate + 1;
      let date = new Date(this.endDate);
      this.endDate = date.setDate(date.getDate() + 7);
    }
    this.dataSource.data = this.GetPomodoroRange(this.pomodoroList);
  }

  RewindDate() {
    this.endDate = this.startDate - 1;
    let date = new Date(this.startDate);
    this.startDate = date.setDate(date.getDate() - 7);
    this.dataSource.data = this.GetPomodoroRange(this.pomodoroList);
  }
}