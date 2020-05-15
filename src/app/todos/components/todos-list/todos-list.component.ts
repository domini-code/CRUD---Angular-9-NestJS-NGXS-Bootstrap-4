import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { TodosState } from '@store/todos.state';
import { Select, Store } from '@ngxs/store';

import {
  GetTodos,
  SetSelectedTodo,
  DeleteTodo,
  UpdateTodo,
} from '@store/todos.actions';
import { Todo } from '@serverAPI/todos/interfaces/todo.interface';
import { UtilsService } from '@shared/services/utils.service';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  @Select(TodosState.getTodoList) todos$: Observable<Todo[]>;

  constructor(private store: Store, private utilsSvc: UtilsService) {}

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }

  onEdit(todo: Todo): void {
    this.store.dispatch(new SetSelectedTodo(todo));
    this.utilsSvc.showForm(true);
  }

  onDelete(id: string): void {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      this.store.dispatch(new DeleteTodo(id));
    }
  }

  onCompletedTodo(todo: Todo): void {
    const todoObj: Todo = {
      name: todo.name,
      completed: true,
    };
    this.store.dispatch(new UpdateTodo(todo._id, todoObj));
  }

  trackByFunction({ item }) {
    if (!item) return null;
    return item._id;
  }
}
