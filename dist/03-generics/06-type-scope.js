"use strict";
// Области видимости типов дженерика
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuplePairCreator = void 0;
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tuplePairCreator = tuplePairCreator;
const toTupleWithOne = tuplePairCreator(1); // [number, U]
const val1 = toTupleWithOne('1'); // [number, string]
