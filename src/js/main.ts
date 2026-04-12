import { Todo } from "./Todo";
import { TodoList } from "./TodoList";

const todoList = new TodoList();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form")! as HTMLFormElement;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addTodo();
    });
});

function addTodo(): void {
    const taskInput = document.getElementById("task") as HTMLInputElement;
    const priorityInput = document.getElementById("priority") as HTMLInputElement;

    const task = taskInput.value;
    const taskPriority = parseInt(priorityInput.value);
    const completed = false;

    if(task && taskPriority) {
        const newTodo = new Todo(task, taskPriority, completed);
        todoList.addTodo(newTodo);
        taskInput.value = "";
        renderTodos();
    }
}

function renderTodos(): void {
    const tasks = todoList.getTodos();
    const taskList = document.getElementById("tasks") as HTMLUListElement;

    if(taskList) {
        taskList.innerHTML = "";

        tasks.forEach((task) => {
            const liEl = document.createElement("li");
            liEl. innerHTML = task.task;
            

            const deleteSpan = document.createElement('span');
            deleteSpan.textContent = ' Delete';
            deleteSpan.className = 'delete-button';

            deleteSpan.addEventListener('click', () => deleteTodo(task.task));
            liEl.appendChild(deleteSpan);

            taskList.appendChild(liEl);
        });
    }
}

function deleteTodo(task: string): void {
   console.log("Tar bort kontakt med email:", task); // 🔍 Testlogg
    todoList.deleteTodos(task);
    renderTodos();
}

renderTodos()
