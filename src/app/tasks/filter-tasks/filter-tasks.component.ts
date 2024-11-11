import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from '../../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filter-tasks.component.html',
  styleUrl: './filter-tasks.component.css'
})
export class FilterTasksComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = "";
  enteredSummary = "";
  enteredDate = '';

  private taskService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.getFilterRequest({
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
    this.close.emit();
  }
}
