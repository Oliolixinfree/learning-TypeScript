// Добавление требований

function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}
len('asdad');
len(['asdad']);
len({ length: 12 });
// len(123); // error
// len(true); // error
const obj1 = { a: 1, length: 1 };
len(obj1);

export {};
