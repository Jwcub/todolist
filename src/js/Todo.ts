import type { TodoInterface } from "./TodoInterface";

export class Todo implements TodoInterface {
    task: string;
    priority: number;
    completed: boolean;

    constructor(task: string, priority: number, completed: boolean) {
        this.task = task;
        this.priority = priority;
        this.completed = completed;
    }
}