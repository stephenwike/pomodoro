import { Component, OnInit } from '@angular/core';
import { PomodoroService } from './pomodoro.service';
import { PomodoroEntity } from './entities/pomodoro.entity';
import { StatisticsModel } from './entities/statistics.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pomodoroList: PomodoroEntity[];
  statisticsModel: StatisticsModel;

  constructor(private service: PomodoroService) {}

  ngOnInit(): void {
    this.GetPomodoros();
  }

  GetPomodoros() {
    this.service.GetPomodoros().subscribe(data => {
      this.pomodoroList = data;
    });
  }

  onPomodoroAdded(pomodoro: PomodoroEntity) {
    console.log("App Component handling pomodoro added!");
    this.pomodoroList = this.pomodoroList.concat([pomodoro]);
  }

  onListFiltered(statsModel: StatisticsModel) {
    this.statisticsModel = statsModel;
  }
}
