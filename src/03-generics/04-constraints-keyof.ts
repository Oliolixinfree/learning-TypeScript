// Сужение допустимых значений типа

// function prop<T>(key: T, obj: T): T[keyof T]
export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}
const obj1 = { x: 1, y: 2, z: 3 };
prop('x', obj1);
// prop('d', obj1); // error

interface Laptop {
  brand: string;
}
type F = Laptop['brand'];
