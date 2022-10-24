// Затипизируйте данную функцию:

function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

append(2, [1, 3, 56, 7]);
// append("2", [1, 3, 56, 7]); // error

export {};
