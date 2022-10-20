"use strict";
const numbers = [1, 2, 3, 4];
const strs = [];
const strs2 = [];
const cars = [];
cars.push({ brand: 'Lenovo', isNew: false });
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
