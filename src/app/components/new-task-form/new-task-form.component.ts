import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Task } from '../../models/task.model';
import { TaskAPIService } from '../../services/task-api.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  @Input() taskForEdit: Task = new Task;
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskAPIService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.taskForm = this.fb.group({
      name: ['', [
        Validators.required
      ]
    ],
      description: ['', [
        Validators.required
      ]
    ]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.taskForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const controls = this.taskForm.controls;
    if (this.taskForm.invalid) {
      Object.keys(controls)
       .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    let newTask: Task = new Task;
    newTask.name = this.taskForm.value.name;
    newTask.description = this.taskForm.value.description;
    if(this.taskForEdit.id != null){
      newTask.id = this.taskForEdit.id;
      newTask.done = this.taskForEdit.done;
      this.taskService.editTask(newTask);
    } else {
      this.taskService.addTask(newTask);
    }


  }

}
