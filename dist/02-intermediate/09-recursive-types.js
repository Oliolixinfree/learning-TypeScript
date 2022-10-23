"use strict";
const nums = [1, 2, [1, 2, [12, [123]]]];
nums.push(1);
nums.push([1, [21]]);
function isJSON(arg) { }
isJSON('str');
isJSON(12);
isJSON({ a: [1, 2, 3], v: { x: 'asd' } });
isJSON(true);
isJSON(null);
