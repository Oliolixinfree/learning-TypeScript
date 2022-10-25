// Утилиты Extract, Exclude, NonNullable
export {};

type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // type TO = "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>; // type T2 = string | number

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>; // type NumericStatus = 200 | 401 | 504
type TextStatus = Exclude<Status, number>; // type TextStatus = "success" | "clientError" | "serverError"

type T00 = Extract<'a' | 'b' | 'c', 'a'>; // type T00 = "a"
type T10 = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // type T10 = "a" | "b"
type T20 = Extract<string | number | (() => void), Function>; // type T20 = () => void

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  country: string;
  education: string;
  skills: string[];
}
type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>; // type PersonNames = "firstName" | "lastName"

type T01 = NonNullable<string | number | undefined>; // type T01 = string | number
type T11 = NonNullable<string[] | null | undefined>; // type T11 = string[]
