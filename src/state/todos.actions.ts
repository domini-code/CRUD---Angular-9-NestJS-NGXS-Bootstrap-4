import { Todo } from '@serverAPI/todos/interfaces/todo.interface';
export class GetTodos {
  static readonly type = '[Todos] Get';
}

export class AddTodo {
  static readonly type = '[Todos] Add';
  constructor(public payload: Todo) {}
}

export class UpdateTodo {
  static readonly type = '[Todos] Update';
  constructor(public id: string, public payload: Todo) {}
}

export class DeleteTodo {
  static readonly type = '[Todos] Delete';
  constructor(public id: string) {}
}

export class SetSelectedTodo {
  static readonly type = '[Todos] Set';
  constructor(public payload: Todo) {}
}
