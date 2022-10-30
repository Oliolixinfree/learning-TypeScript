"use strict";
// Опишите типы для класса Temperature:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}
exports.Temperature = Temperature;
Temperature.fromFahrenheit(64);
const temp0 = Temperature.fromFahrenheit(64);
temp0.celsius;
const temp1 = new Temperature(99);
temp1.fahrenheit = 77;
