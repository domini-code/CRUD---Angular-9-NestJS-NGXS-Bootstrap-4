import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '@serverAPI/todos/interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private URL_API = 'http://localhost:4200/api/todos';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL_API);
  }

  addTodo(todo: Todo): Observable<Todo> {
    const todoObj = {
      name: todo.name,
    };
    return this.http.post<Todo>(this.URL_API, todoObj);
  }

  updateTodo(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.URL_API}/${id}`, todo);
  }

  deleteTodo(id: string): Observable<{}> {
    return this.http.delete<Todo>(`${this.URL_API}/${id}`);
  }
}
