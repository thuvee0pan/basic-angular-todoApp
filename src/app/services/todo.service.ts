import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit="?_limit=10"

  
  constructor(private http:HttpClient) { }
  getTodo():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }
  todoCompleted(todo: Todo): Observable<any>  {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url , todo ,httpOption)
  }
  todoDelete(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOption)
  }
  addTodo(todo:Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo , httpOption)
  }
}
