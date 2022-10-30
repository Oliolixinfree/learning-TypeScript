"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    go(speed) {
        console.log('go', speed);
    }
    stop() {
        console.log('stop');
    }
}
exports.Car = Car;
const car = new Car();
car.go(23);
// car.maxSpeed = 100; //Error
