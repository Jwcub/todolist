interface Todo {
    task: string;
    priority: number;
    completed: boolean;
}

class todoList implements Todo {

   

    todos: Todo[] = []; 
    addTodo(task: string, priority: number):boolean {
        if(task && priority)
        return true;
    }
}







 /*
    task: string;
    priority: number;
    completed: boolean;

    constructor(task: string, priority: number, completed: boolean) {
        this.task = task;
        this.priority = priority;
        this.completed = completed;
    }
    */