"use strict";
// Дана функция head, которая возвращает либо первый символ переданной строки,
// либо первый элемент переданного массива.
Object.defineProperty(exports, "__esModule", { value: true });
function head(value) {
    return value[0];
}
const result = head('strs');
const result2 = head([1, 2, 4]);
