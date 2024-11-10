import { Component, Input, Output, EventEmitter, inject,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../../task.service';
import { Task } from '../task/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  //@Input({ required: true }) task!: Task;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) summary!: string;
  @Input({ required: true }) dueDate!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = "New title";
  enteredSummary = "New summary";
  enteredDate = "2024-11-30";

  private taskService = inject(TaskService);


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.updateTask({
      id: this.id,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }).subscribe(() => {
      this.taskService.getOnRequest();
      this.close.emit();
    });
  }
}
