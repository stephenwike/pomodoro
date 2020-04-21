import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { single } from './data';
import { StatisticsModel } from '../entities/statistics.model';

@Component({
  selector: 'app-pomodoro-statistics',
  templateUrl: './pomodoro-statistics.component.html',
  styleUrls: ['./pomodoro-statistics.component.css']
})
export class PomodoroStatisticsComponent {

  @Input() statisticsModel: StatisticsModel;

  single: any[];
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
}
