import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo'
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodo().subscribe(todos => {
     this.todos =todos
   })
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.todoDelete(todo).subscribe()
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }
}
