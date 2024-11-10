import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from '../task.service';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { EditTaskComponent } from "./edit-task/edit-task.component";
import { FilterTasksComponent } from './filter-tasks/filter-tasks.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, FilterTasksComponent, EditTaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;
  isFilteringTask = false;
  enteredDate = "";

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onStartFilterTask() {
    this.isFilteringTask  = true;
  }

  onCloseFilterTask() {
    this.isFilteringTask  = false;
  }

}
