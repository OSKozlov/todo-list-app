import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './core/todo-list/todo-list.component';
import { TodoService } from '../app/shared/todo-service'; 

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
