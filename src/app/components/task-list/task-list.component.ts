import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Task } from '../../models/task.model';
import { TaskAPIService } from '../../services/task-api.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  public allTasks$: Array<Task> = [];


  constructor(private taskService: TaskAPIService, private router: Router) {
  }

  ngOnInit() {
    this.taskService.allTasks$.subscribe((allTasks$) => this.allTasks$ = allTasks$);
  }

  changeDone(id: number){
    this.taskService.changeTaskDone(id);
  }

  edit(id: number){
    this.router.navigate(['/tasks/'+id]);
  }

  delete(id: number){
    this.taskService.deleteTask(id);
  }



}
