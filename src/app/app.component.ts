import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: any[] = [];

  taskService = inject(TaskService);

  constructor(){
    this.taskService.get().subscribe(response => {
      this.tasks = response.tasks;
      console.log(response);
    });
  }

}
