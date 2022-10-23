// Сужение типов

function example1(x?: number | string) {
  if (typeof x === 'string') {
    x.toUpperCase();
  } else if (typeof x === 'number') {
    x.toFixed();
  } else if (x === undefined) {
    console.log('no value');
  } else {
    x;
  }
}

function example2(strs: string | string[] | null) {
  // if (typeof strs === 'object') {}
  // Проверка на null
  if (strs && typeof strs === 'object') {
    strs.concat([]);
  } else if (typeof strs === 'string') {
    strs.toLowerCase();
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getMonth();
  } else {
    x.concat([]);
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}
