import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { TaskAPIService } from '../../services/task-api.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  taskForEdit: Task = new Task;

  constructor(private taskService: TaskAPIService,  private router: Router) { }

  ngOnInit() {
  }

  addOrEditTask(targetTask: Task){
    this.router.navigate(['tasks/new']);



    /*let movingTaskForm: any = document.getElementsByClassName("moving_task_form")[0];
    let curtain: any = document.getElementsByClassName("curtain")[0];

    if( !movingTaskForm.classList.contains("show") ){
      movingTaskForm.classList.add("show");
      curtain.classList.add("show");
    }
    console.log(targetTask);
    if(targetTask){
      this.taskForEdit = targetTask;
    } else{
      this.taskForEdit = new Task;
    }
*/
  }

  hideTaskForm(){
    let movingTaskForm: any = document.getElementsByClassName("moving_task_form")[0];
    let curtain: any = document.getElementsByClassName("curtain")[0];

    curtain.classList.remove("show");
    movingTaskForm.classList.remove("show");
  }

}
