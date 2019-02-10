import { Injectable } from "@angular/core";

@Injectable()
export class TodoService{

    todos = [];

    constructor() {}

    addTodo(newTodoLabel): any[] {
        if (newTodoLabel !== undefined && newTodoLabel != "") {
          var newTodo = {
            label: newTodoLabel,
            priority: 1,
            done: false
          };
          this.todos.push(newTodo);
        }
        return this.todos;
      }
    
      deleteTodo(todo): any[] {
        this.todos = this.todos.filter( t=> t.label !== todo.label);
        return this.todos;
      }
    
}