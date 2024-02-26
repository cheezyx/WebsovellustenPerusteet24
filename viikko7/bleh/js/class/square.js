import { Rectangle } from "./rectangle.js"

export class Square extends Rectangle {
    constructor(x, y, sideL) {
        super(x, y, sideL, sideL);
    }

}