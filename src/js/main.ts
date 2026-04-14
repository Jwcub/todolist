import { Todo } from "./Todo";
import { TodoList } from "./TodoList";

// Skapar nytt objekt, todoList
const todoList = new TodoList();


// Lägger till eventlyssnare på "+"knapp
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form")! as HTMLFormElement;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addTodo();
    });
});

// Funktionalitet för att lägga till ny påminnelse
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

// Skriver ut att påminnelser
function renderTodos(): void {
    const tasks = todoList.getTodos();
    const taskList = document.getElementById("tasks") as HTMLUListElement;

    //Sortera uppgifter efter prioritet
    tasks.sort((a, b) => a.priority - b.priority);
    console.log(tasks);

    if(taskList) {
        taskList.innerHTML = "";

        tasks.forEach((task) => {
            const liEl = document.createElement("li");
            const textEl = document.createElement("span");
            textEl.classList = "task-text";
            textEl.innerText = task.task;
            liEl.appendChild(textEl);

            // Knapp för att radera påminnelse
            const deleteSpan = document.createElement("span");
            deleteSpan.className = "material-symbols-outlined delete-btn";
            deleteSpan.innerHTML = "close";

            deleteSpan.addEventListener("click", () => {
                todoList.deleteTodos(task.task)
                renderTodos();
            });

            liEl.appendChild(deleteSpan);

            // Markera påminnelser som slutförda
            const taskIndex = tasks.indexOf(task);

            if(task.completed === true) {
                liEl.classList.toggle('checked');
            }
            
            liEl.addEventListener("click", () => {
                liEl.classList.toggle('checked');
                todoList.markTodoCompleted(taskIndex);
            });

            // Lägger till element i DOM
            taskList.appendChild(liEl);
        });
    }
}

renderTodos();
