import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPageComponent } from './pages/task-page/task-page.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';


const routes: Routes = [
    {path: '', redirectTo: 'tasks', pathMatch: 'full'},
    {path: 'tasks', component: TaskPageComponent,
      children: [
        {path: 'new', component: NewTaskFormComponent},
    	  {path: ':id', component: NewTaskFormComponent},
    	]},
    {path: '**', redirectTo: 'tasks', pathMatch: 'full'}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TaskPageComponent, NewTaskFormComponent]
