import { Component, OnInit} from '@angular/core';

import { TaskAPIService } from '../../services/task-api.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  taskForEdit: Task = new Task;

  constructor(private taskService: TaskAPIService) { }

  ngOnInit() {
    //need to check url
  }

  addOrEditTask(targetTask: Task){
    //need to edit url !

    let movingTaskForm: any = document.getElementsByClassName("moving_task_form")[0];

    if( !movingTaskForm.classList.contains("show") ){
      movingTaskForm.classList.add("show");
    }
    console.log(targetTask);
    if(targetTask){
      this.taskForEdit = targetTask;
    } else{
      this.taskForEdit = new Task;
    }

  }

}
