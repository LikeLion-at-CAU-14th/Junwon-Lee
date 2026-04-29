import DOM from "./DOM.js";

class Button extends DOM {
    constructor(innerText, className, iconSrc) {
        super('button', innerText, className);

        this.img = new Image();
        this.img.src = iconSrc;
        this.img.width = 20;
        this.img.height = 20;
        this.node.prepend(this.img);
    }
}

export default Button;