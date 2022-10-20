"use strict";
// Numbers
let x = 10.5;
// let y = 123n;
let z = NaN;
// String
let str1;
str1 = 'Hello world';
// Symbol
let symb = Symbol('123');
// Boolean
let o = true;
// Nothing
let u = undefined;
let n = null;
// Literal
const num = 108; // const num: 108
const str2 = 'Hello Vasya'; // const str2: "Hello Vasya"
// Any (лучше не использовать)
let anyValue = 1;
anyValue = 'Hello Petr';
anyValue = false;
anyValue = [];
// Unknow
let unkn = 1;
if (typeof unkn === 'string')
    unkn.toUpperCase();
