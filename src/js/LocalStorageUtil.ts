import { Todo } from "./Todo";

export class LocalStorageUtil {
    static saveTodos(todos: Todo[]) {
        localStorage.setItem('tasks', JSON.stringify(todos));
    }

    static loadTodos(): Todo[] {
        const storedTodos = localStorage.getItem('tasks')

        if(storedTodos) {
            const rawData = JSON.parse(storedTodos)
            return rawData.map((c: {task: string; priority: number; completed: boolean}) => new Todo(c.task, c.priority, c.completed));
        } else {
            return [];
        }
    }
}