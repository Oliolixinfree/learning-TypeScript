"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    get area() {
        return Circle.pi * this.radius * this.radius;
    }
}
exports.Circle = Circle;
Circle.pi = 3.14;
const c1 = new Circle(20);
c1.radius;
c1.area;
class Ellipse extends Circle {
    constructor(radius) {
        super(radius);
        this.radius = radius;
        Circle.pi;
    }
}
