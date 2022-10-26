// Утилиты ReadOnly, Required, Partial
export {};

interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
}

// type ReadOnlyTodo = {readonly id: string; readonly title: string; и т.д.}
type ReadOnlyTodo = Readonly<Todo>;

// type ReadOnlyTodo = { id?: string;  title?: string; и т.д.}
type PartialTodo = Partial<Todo>;
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}

// все поля обязательные
type RequiredTodo = Required<Todo>;
