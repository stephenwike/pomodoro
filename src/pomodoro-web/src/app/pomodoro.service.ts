import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PomodoroEntity } from './entities/pomodoro.entity';
import { CodeEntity } from './entities/code.entity';
import { Observable } from 'rxjs';
import { ProjectEntity } from './entities/project.entity';
import { TaskTypeEntity } from './entities/tasktype.entity';

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {
  baseUrl: string = 'http://fireshellstudio.us:8002/pomodoro';
  constructor(private http: HttpClient) { }

  GetPomodoros(): Observable<PomodoroEntity[]> {
    return this.http.get<PomodoroEntity[]>(this.baseUrl);
  }

  GetProjects(): Observable<ProjectEntity[]> {
    return this.http.get<ProjectEntity[]>(this.baseUrl + '/projects');
  }

  GetTaskTypes(): Observable<TaskTypeEntity[]> {
    return this.http.get<TaskTypeEntity[]>(this.baseUrl + '/tasktypes');
  }

  GetCodes(): Observable<CodeEntity[]> {
    return this.http.get<CodeEntity[]>(this.baseUrl + '/codes');
  }

  CreatePomodoro(data: PomodoroEntity): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, data);
  }

  UpdatePomodoro(field: string, value: string, index: number): Observable<boolean> {
    let data = {"field": field, "value": value, "index": index};
    console.log(data);
    return this.http.put<boolean>(this.baseUrl, data);
  }
}
