import { Todo } from "./Todo";
import { LocalStorageUtil } from "./LocalStorageUtil";

export class TodoList {
    private todos: Todo[] = [];

    constructor() {
        this.todos = LocalStorageUtil.loadTodos();
    }

    public addTodo(todo: Todo): void {
        this.todos.push(todo);
    }

    public getTodos(): Todo[] {
        return this.todos;
    }
}