import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Task } from '../../models/task.model';
import { TaskAPIService } from '../../services/task-api.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  public task: Task;
  public nameIsFilled: boolean = true;
  public descriptionIsFilled: boolean = true;

  constructor(private taskService: TaskAPIService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
    params => {
      if(params['id']){
        this.task = this.taskService.getTask(params['id']);
      } else{
        this.task = new Task;
      }
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let nameInput: string = (<HTMLInputElement>document.getElementsByClassName("name_input")[0]).value;
    let descriptionInput: string = (<HTMLInputElement>document.getElementsByClassName("description_input")[0]).value;
    this.nameIsFilled = nameInput != '';
    this.descriptionIsFilled = descriptionInput != '';

    if(this.nameIsFilled && this.descriptionIsFilled){
      let newTask: Task = new Task;
      newTask.name = nameInput;
      newTask.description = descriptionInput;
      if(this.task.id != null){
        newTask.id = this.task.id;
        newTask.done = this.task.done;
        this.taskService.editTask(newTask);
      } else {
        this.taskService.addTask(newTask);
      }
      this.router.navigate(['/tasks']);
    }
  }

}
