"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Vehicle {
    stop() {
        console.log('Stopped');
    }
}
class Car extends Vehicle {
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log(speed);
    }
}
exports.Car = Car;
// const v1 = new Vehicle();
