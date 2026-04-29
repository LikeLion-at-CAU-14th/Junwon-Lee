import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

class TodoController {
    constructor(todo) {
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        })

        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        })
    }

    addTodo() {
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = '';
    }

    delTodo() {
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());

        if(this.comBtnNode.innerText == '미완') {
            const text = this.innerNode.innerText;
            const complete = new CompleteController(text);
            complete.addComplete();
        }
    }

    doneTodo() {
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');
        const img = this.comBtnNode.querySelector('img');
        if(this.comBtnNode.innerText == '미완') {
            this.comBtnNode.innerText = '완료';
            img.src = './assets/complete.png';
        }
        else {
            this.comBtnNode.innerText = '미완';
            img.src = './assets/undo.png';
        }
        this.comBtnNode.prepend(img);
    }
}

export default TodoController;