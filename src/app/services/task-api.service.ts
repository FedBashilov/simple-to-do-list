import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskAPIService {

  private allTasksStore: BehaviorSubject<Array<Task>> = new BehaviorSubject(this.getAllTasks());
  allTasks$: Observable<any> = this.allTasksStore.asObservable();

  constructor() {
  }

  addTask(newTask: Task){
    //generate id
    let id: number = 0;
    while( localStorage.getItem(id.toString()) != null ){
      id++;
    }

    let data = JSON.stringify({
      name: newTask.name,
      description: newTask.description,
      done: newTask.done
    });
    localStorage.setItem(id.toString(), data);

    this.allTasksStore.next(this.getAllTasks());
  }

  changeTaskDone(id: number){
    let data = JSON.parse(localStorage.getItem(id.toString()));
    let item: Task = new Task;

    for (let prop in data) {
      item[prop] = data[prop];
    }
    item.id = id;
    item.done = !item.done;

    localStorage.removeItem(id.toString());
    this.addTask(item);
  }

  deleteTask(id: number){
    localStorage.removeItem(id.toString());
    this.allTasksStore.next(this.getAllTasks());
  }

  editTask(task: Task){
    localStorage.removeItem(task.id.toString());
    this.addTask(task);
  }

  getAllTasks(){
    let items: Array<Task> = [];
    let bufItem: Task;
    Object.keys(localStorage).forEach((key) => {
      bufItem = new Task;
      bufItem = JSON.parse(localStorage.getItem(key));
      bufItem.id = parseInt(key);
      items.push(bufItem);
    });
    return items;
  }

  loadTasks(){
    this.allTasksStore.next(this.getAllTasks());
  }
}
