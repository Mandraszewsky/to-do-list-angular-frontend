import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaskService } from './task.service';
import { HeaderComponent } from "./header/header.component";
import { USERS_TEMPLATE } from './users-template';
import { UserComponent } from './user/user.component';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedUserId?: string;
  users = USERS_TEMPLATE;
  
  // tasks: any[] = [];

  // taskService = inject(TaskService);

  // constructor(){
  //   this.taskService.get().subscribe(response => {
  //     this.tasks = response.tasks;
  //     console.log(response);
  //   });
  // }

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;
  }

}
