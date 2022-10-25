"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
let srt = 'heeey';
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
exports.average = average;
const max = (...numbers) => Math.max(...numbers);
max(4, 5, 6);
