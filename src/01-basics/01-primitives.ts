// Numbers
let x: number = 10.5;
// let y = 123n;
let z = NaN;

// String
let str1: string;
str1 = 'Hello world';

// Symbol
let symb: symbol = Symbol('123');

// Boolean
let o: boolean = true;

// Nothing
let u: undefined = undefined;
let n: null = null;

// Literal
const num = 108; // const num: 108
const str2 = 'Hello Vasya'; // const str2: "Hello Vasya"

// Any (лучше не использовать)
let anyValue: any = 1;
anyValue = 'Hello Petr';
anyValue = false;
anyValue = [];

// Unknow
let unkn: unknown = 1;
if (typeof unkn === 'string') unkn.toUpperCase();
