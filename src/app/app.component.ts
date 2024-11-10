import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;
  }

}
