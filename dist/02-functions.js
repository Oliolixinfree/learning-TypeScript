"use strict";
function sum(a, b) {
    return a + b;
}
sum(1, 2);
const sum2 = (a, b) => a + b;
const sum3 = function (a, b) {
    return a + b;
};
function log(name) {
    console.log('Hello', name);
}
function log2(name, userId) {
    console.log('Hello', name, 'with ID', userId || 'anonym');
}
log2('Vasya');
function err() {
    throw new Error('Error');
}
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
