import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskAPIService } from '../../services/task-api.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  @Output() editTaskEvent = new EventEmitter<Task>();

  public allTasks$: Array<Task> = [];


  constructor(private taskService: TaskAPIService) {
  }

  ngOnInit() {
    this.taskService.allTasks$.subscribe((allTasks$) => this.allTasks$ = allTasks$);
  }

  changeDone(id: number){
    this.taskService.changeTaskDone(id);
  }

  edit(targetTask: Task){
    this.editTaskEvent.emit(targetTask);
  }

  delete(id: number){
    this.taskService.deleteTask(id);
  }



}
