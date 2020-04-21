import { Component, NgModule, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StatisticsModel } from 'src/app/entities/statistics.model';

@Component({
  selector: 'app-pomodoro-per-field',
  templateUrl: './pomodoro-per-field.component.html',
  styleUrls: ['./pomodoro-per-field.component.css']
})

export class PomodoroPerFieldComponent implements OnChanges {

  @Input() statisticsModel: StatisticsModel;
  dataSet: any[];

  // options
  view: any[] = [450, 250];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: string = 'above';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single: this.dataSet });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSet = [];
    if (!this.statisticsModel) return;
    let data = [];

    //Gets project-total over time period
    let projects = this.statisticsModel.pomodoros
      .map(a => a.project)
      .filter((item, i, ar) => ar.indexOf(item) === i);
    projects.forEach(project => {
      data.push(
        { "name": project, "value":  this.statisticsModel.pomodoros.filter(x => x.project == project).length}
      );
    });
   
    this.dataSet = data;
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
