"use strict";
// Перегрузка функций
function add(a, b) {
    return a + b;
}
add('Hello', 'world');
add(1, 2);
function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
asyncSum(1, 2);
