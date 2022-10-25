// Области видимости типов дженерика

export function tuplePairCreator<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second];
  };
}

const toTupleWithOne = tuplePairCreator(1); // [number, U]
const val1 = toTupleWithOne('1'); // [number, string]
