export function toArray<T>(...arg: T[]): T[] {
  return arg;
}
toArray<number>(1, 2, 3);
toArray('1, 2, 3', 'asd');

function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
  return value[0];
}
head(['123', '123']);

const head2 = <T>(value: T[]): T => value[0];

interface ModelData<T> {
  title: string;
  value: T;
}
const obj1: ModelData<number> = {
  title: 'asda',
  value: 12,
};
const obj2: ModelData<Array<number>> = {
  title: 'asda',
  value: [123, 111],
};
