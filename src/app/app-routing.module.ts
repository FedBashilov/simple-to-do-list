import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPageComponent } from './pages/task-page/task-page.component';


const routes: Routes = [
    {path: '', redirectTo: 'tasks', pathMatch: 'full'},
    {path: 'tasks',
      children: [
        {path: '', component: TaskPageComponent},
        {path: 'new', component: TaskPageComponent},
    	  {path: ':id', component: TaskPageComponent},
    	]},
    {path: '**', redirectTo: 'tasks', pathMatch: 'full'}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TaskPageComponent]
