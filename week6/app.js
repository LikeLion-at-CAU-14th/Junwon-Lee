import CompleteController from "./controller/CompleteController.js";
import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById("input");
const input = document.querySelector('input');
const allCompleteBtn = document.getElementById("all-complete");

addBtn.addEventListener('click', () => {
    const todoController = new TodoController(input.value);
    todoController.addTodo();
    input.value = '';
})

allCompleteBtn.addEventListener('click', () => {
    const completed = document.querySelectorAll('.done-text');
    completed.forEach(el => {
        const text = el.innerText;
        const row = el.parentElement;
        row.parentElement.removeChild(row);
        const complete = new CompleteController(text);
        complete.addComplete();
    })
})