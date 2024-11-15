export interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }

  export interface TaskDto {
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }

  export interface UpdateTaskDto {
    id: string;
    title: string;
    summary: string;
    dueDate: string;
  }