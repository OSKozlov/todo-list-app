import {Component,OnInit} from '@angular/core';
import {TodoService} from '../../shared/todo-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title = 'Todo list';
  todos = [];

  constructor(private todoService: TodoService) { }

  addTodo(newTodoLabel) {
    this.todos = this.todoService.addTodo(newTodoLabel);
  }

  deleteTodo(todo) {
    this.todos = this.todoService.deleteTodo(todo);
  }

  ngOnInit() {
  }

}
