import Todo from "./Todo.js";

class Complete extends Todo {
    constructor(complete) {
        super(complete);
    }
    addRow() {
        [this.textBox, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row;
    }
}

export default Complete;