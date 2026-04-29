import Complete from "../DOM/Complete.js";

class CompleteController {
    constructor(complete) {
        this.newComplete = new Complete(complete);
        this.delBtnNode = this.newComplete.getDelBtn();
        this.innerNode = this.newComplete.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delComplete();
        })
    }

    addComplete() {
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.newComplete.addRow());
    }

    delComplete() {
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.newComplete.getRow());
    }
}

export default CompleteController;