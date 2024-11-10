import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TaskService } from '../../task.service';
import { Task } from './task.model';
import { SharedComponent } from '../../shared/shared.component';
import { EditTaskComponent } from "../edit-task/edit-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SharedComponent, DatePipe, EditTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  isUpdatingTask = false;
  private taskService = inject(TaskService);


  onCompleteTask() {
    this.taskService.removeTask(this.task.id).subscribe(() => {
      this.taskService.getOnRequest();
    });
  }

  onStartUpdateTask() {
    this.isUpdatingTask = true;
  }

  onCloseUpdateTask() {
    this.isUpdatingTask = false;
  }
}
