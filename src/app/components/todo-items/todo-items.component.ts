import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import {TodoService} from 'src/app/services/todo.service'
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes: object;
    if (this.todo.completed) {
     classes = {
      "alert": true,
      "alert-success": true
      }
    } else {
    classes = {
      
      "alert": true,
      "alert-danger": true,
      "is-completed":true
      }
    }
    return classes;
  }
  onToggle(todo) {
  
    todo.completed = !todo.completed
    
    this.todoService.todoCompleted(todo).subscribe(todos => {
      console.log(todo);
      
      })
}
onDelete(todo) {

  this.deleteTodo.emit(todo)
}

}

