// Условные типы, они же conditionals

const x = 12;

const isXNegative = x >= 0 ? 'no' : 'yes';

interface StringRecord {
  [key: string]: string;
}
interface DateRecord {
  [key: string]: Date;
}
type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MyRecord<string>;

export {};
