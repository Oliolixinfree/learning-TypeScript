"use strict";
// Нюансы конструктора
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Vehicle {
    // private createdAt: Date;
    constructor(createdAt) {
        this.createdAt = createdAt;
    }
    drive(speed) {
        console.log(' Let us go with speed', speed.toFixed());
        this.log(speed);
    }
    stop() {
        console.log('Stopped');
    }
    log(speed) {
        console.log('Vehicle has changed speed to', speed, this.createdAt);
    }
    alternativeLog(text) {
        console.log(text.toUpperCase);
    }
}
class Car extends Vehicle {
    // public color: string;
    // public maxSpeed: number;
    constructor(color, maxSpeed) {
        super(new Date());
        this.color = color;
        this.maxSpeed = maxSpeed;
        // this.color = color;
        // this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(this.color, this.maxSpeed, this.createdAt);
    }
}
exports.Car = Car;
const car1 = new Car('red', 200);
// car1.color = 'blue'
