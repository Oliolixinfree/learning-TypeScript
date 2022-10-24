"use strict";
// Добавление требований
Object.defineProperty(exports, "__esModule", { value: true });
function len(arg) {
    return arg.length;
}
len('asdad');
len(['asdad']);
len({ length: 12 });
// len(123); // error
// len(true); // error
const obj1 = { a: 1, length: 1 };
len(obj1);
