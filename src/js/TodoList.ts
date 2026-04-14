import { Todo } from "./Todo";

export class TodoList {
    private todos: Todo[] = [];

    constructor() {
        this.todos = this.loadTodos();
    }

    public addTodo(task: string, taskPriority: number): boolean {
        const newTodo = new Todo(task, taskPriority, false);
        
        if (task.length >= 2 && taskPriority > 0 && taskPriority < 4) {
            this.todos.push(newTodo);
            this.saveTodos(this.todos);
            return true;
        } else return false;
    }

    public getTodos(): Todo[] {
        return this.todos;
    }

    public markTodoCompleted(todoIndex: number): void {
        if(this.todos[todoIndex].completed === false) {
            this.todos[todoIndex].completed = true;
        } else if(this.todos[todoIndex].completed === true) {
            this.todos[todoIndex].completed = false;
        }
        this.saveTodos(this.todos);
    }

    public deleteTodos(task: string): void {
        this.todos = this.todos.filter(c => c.task !== task);
        this.saveTodos(this.todos)
    }

    public saveTodos(todos: Todo[]) {
        localStorage.setItem('tasks', JSON.stringify(todos));
    }

    public loadTodos(): Todo[] {
        const storedTodos = localStorage.getItem("tasks");

        if(storedTodos) {
            const rawData = JSON.parse(storedTodos)
            return rawData.map((c: {task: string; priority: number; completed: boolean}) => new Todo(c.task, c.priority, c.completed));
        } else {
            return [];
        }
    }
}