import { Todo } from "./Todo";
import { LocalStorageUtil } from "./LocalStorageUtil";

export class TodoList {
    private todos: Todo[] = [];

    constructor() {
        this.todos = LocalStorageUtil.loadTodos();
    }

    public addTodo(todos: Todo): void {
        this.todos.push(todos);
        LocalStorageUtil.saveTodos(this.todos);
    }

    public getTodos(): Todo[] {
        return this.todos;
    }
}