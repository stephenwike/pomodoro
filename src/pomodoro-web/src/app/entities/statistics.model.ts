import { PomodoroEntity } from './pomodoro.entity';

export class StatisticsModel {
    pomodoros: PomodoroEntity[];
    beginDate: number;
    endDate: number;

    GetDates() {
        var dateArray = new Array();
        var currentDate = this.beginDate;
        while (currentDate <= this.endDate) {
            let date = new Date(currentDate);
            dateArray.push(date.valueOf());
            currentDate = date.setDate(date.getDate() + 1);
            console.log(date);
        }
        return dateArray;
    }
}