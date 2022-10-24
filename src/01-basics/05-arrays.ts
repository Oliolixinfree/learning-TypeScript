const numbers: number[] = [1, 2, 3, 4];
const strs: string[] = [];
const strs2: Array<string> = [];

interface PC {
  brand: string;
  isNew: boolean;
}

const cars: PC[] = [];
cars.push({ brand: 'Lenovo', isNew: false });

const arrOfArr: string[][] = [];
arrOfArr.push(['', '']);

function printArr(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index);
  });
}

export {};
