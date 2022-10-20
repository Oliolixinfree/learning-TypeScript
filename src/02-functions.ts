function sum(a: number, b: number): number {
  return a + b;
}
sum(1, 2);

const sum2 = (a: number, b: number): number => a + b;

const sum3 = function (a: number, b: number): number {
  return a + b;
};

function log(name: string): void {
  console.log('Hello', name);
}

function log2(name: string, userId?: number): void {
  console.log('Hello', name, 'with ID', userId || 'anonym');
}
log2('Vasya');

function err(): never {
  throw new Error('Error');
}

function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
}
