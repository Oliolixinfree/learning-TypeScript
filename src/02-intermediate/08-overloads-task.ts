// Дана функция head, которая возвращает либо первый символ переданной строки,
// либо первый элемент переданного массива.

// Приведенные типы функции заведомо избыточны. Необходимо переписать их, используя подход перегрузки.
function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

const result = head('strs');
const result2 = head([1, 2, 4]);

export {};
