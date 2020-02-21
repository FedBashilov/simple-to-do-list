import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskAPIService } from '../../services/task-api.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  @Input() taskForEdit: Task = new Task;
  @Output() closeEvent = new EventEmitter();
  public nameIsFilled: boolean = true;
  public descriptionIsFilled: boolean = true;

  constructor(private taskService: TaskAPIService) { }

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
      if(this.taskForEdit.id != null){
        newTask.id = this.taskForEdit.id;
        newTask.done = this.taskForEdit.done;
        this.taskService.editTask(newTask);
      } else {
        this.taskService.addTask(newTask);
      }
      this.closeEvent.emit();
    }

  }

}
