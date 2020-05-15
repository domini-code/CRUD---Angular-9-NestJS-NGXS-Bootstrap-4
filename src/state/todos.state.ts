import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { tap } from 'rxjs/operators';

import {
  SetSelectedTodo,
  GetTodos,
  AddTodo,
  UpdateTodo,
  DeleteTodo,
} from './todos.actions';

import { Todo } from '@serverAPI/todos/interfaces/todo.interface';
import { TodoService } from '@app/todos/services/todo.service';

export class TodosStateModel {
  public todos: Todo[];
  public selectedTodo: Todo;
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    selectedTodo: null,
  },
})
@Injectable()
export class TodosState {
  constructor(private readonly todoSvc: TodoService) {}

  @Selector()
  public static getTodoList({ todos }: TodosStateModel) {
    return todos;
  }

  @Selector()
  public static getSelectedTodo({ selectedTodo }) {
    return selectedTodo;
  }

  @Action(GetTodos)
  getTodos({ getState, setState }: StateContext<TodosStateModel>) {
    return this.todoSvc.getAll().pipe(
      tap((todos) => {
        const state = getState();
        setState({ ...state, todos });
      })
    );
  }

  @Action(AddTodo)
  addTodo(
    { getState, patchState }: StateContext<TodosStateModel>,
    { payload }: AddTodo
  ) {
    return this.todoSvc.addTodo(payload).pipe(
      tap((todo) => {
        const state = getState();
        patchState({
          todos: [...state.todos, todo],
        });
      })
    );
  }

  @Action(UpdateTodo)
  updateTodo(
    { getState, setState }: StateContext<TodosStateModel>,
    { id, payload }: UpdateTodo
  ) {
    return this.todoSvc.updateTodo(id, payload).pipe(
      tap((todo: Todo) => {
        const state = getState();
        const newState = state.todos.filter((todo) => todo._id !== id);
        setState({ ...state, todos: [...newState, todo] });
      })
    );
  }

  @Action(DeleteTodo)
  deleteTodo(
    { getState, patchState }: StateContext<TodosStateModel>,
    { id }: DeleteTodo
  ) {
    return this.todoSvc.deleteTodo(id).pipe(
      tap(() => {
        const state = getState();
        const newState = state.todos.filter((todo) => todo._id !== id);
        patchState({
          ...state.todos,
          todos: [...newState],
        });
      })
    );
  }

  @Action(SetSelectedTodo)
  setSelectedTodo(
    { getState, setState }: StateContext<TodosStateModel>,
    { payload }: SetSelectedTodo
  ) {
    const state = getState();
    setState({
      ...state,
      selectedTodo: payload,
    });
  }
}
