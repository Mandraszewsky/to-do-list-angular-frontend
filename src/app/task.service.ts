import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment.development';
import { TaskDto } from './tasks/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: any[] = [];

  constructor() {
    this.get().subscribe(response => {
      this.tasks = response.tasks;
    });
  }

  private http = inject(HttpClient);
  private apiUrl = environment.apiURL + '/orders';


  public get(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getOnRequest() {
    this.get().subscribe(response => {
      this.tasks = response.tasks;
    });
  }

  addTask(Task: TaskDto) {
    return this.http.post(`${this.apiUrl}`, {Task});
  }

  removeTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

}
