"use strict";
// Сужение допустимых значений типа
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
// function prop<T>(key: T, obj: T): T[keyof T]
function prop(key, obj) {
    return obj[key];
}
exports.prop = prop;
const obj1 = { x: 1, y: 2, z: 3 };
prop('x', obj1);
