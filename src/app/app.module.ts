import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskPageComponent,
    routingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
