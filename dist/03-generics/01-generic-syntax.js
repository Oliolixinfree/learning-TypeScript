"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
function toArray(...arg) {
    return arg;
}
exports.toArray = toArray;
toArray(1, 2, 3);
toArray('1, 2, 3', 'asd');
function head(value) {
    return value[0];
}
head(['123', '123']);
const head2 = (value) => value[0];
const obj1 = {
    title: 'asda',
    value: 12,
};
const obj2 = {
    title: 'asda',
    value: [123, 111],
};
