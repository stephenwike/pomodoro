import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StatisticsModel } from 'src/app/entities/statistics.model';

@Component({
  selector: 'app-pomodoros-per-day',
  templateUrl: './pomodoros-per-day.component.html',
  styleUrls: ['./pomodoros-per-day.component.css']
})
export class PomodorosPerDayComponent implements OnChanges {

  @Input() statisticsModel: StatisticsModel;

  dataSet: any[];

  // options
  view = [450, 250];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Day';
  showYAxisLabel = true;
  yAxisLabel = 'Pomodoro';

  colorScheme = {
    domain: ['#8bcee0']
  };

  constructor() {
    Object.assign(this, { single: this.dataSet })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSet = [];
    if (!this.statisticsModel) return;
    let data = [];

    //Gets project-per-week
    // let projects = this.pomodoroList
    //   .map(a => a.project)
    //   .filter((item, i, ar) => ar.indexOf(item) === i);
    // console.log(projects);
    // projects.forEach(project => {
    //   data.push(
    //     { "name": project, "value":  this.pomodoroList.filter(x => x.project == project).length}
    //   );
    // });
    // this.dataSet = data;
    let days = this.statisticsModel.pomodoros
       .map(x => new Date(x.created).setHours(0,0,0,0));
    let range = this.statisticsModel.GetDates();
    range.forEach(day => {
      // To get options: 
      // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
      data.push(
        { 
          "name": new Date(day).toLocaleDateString(
            "en-US", { weekday: "short" }), 
          "value": days.filter(x => x == day).length }
      )
    });
    this.dataSet = data;
  }

  onSelect(event) {
    console.log(event);
  }
}
