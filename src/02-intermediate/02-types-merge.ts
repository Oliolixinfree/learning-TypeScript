type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // type Union3 = "a" | "b" | "c" | "d" | "e" | "i"
type Union4 = Union1 & Union2; // type Union4 = "a" | "c"

type Union5 = { a: string; b: string; c: number } & { a: string; t: boolean; z: null };
// const example: Union5 = {}

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Person = {
  readonly firstName: string;
  lastName: string;
  pthone?: string;
  yearOfBirth: number;
};

type Emploee = {
  contractStart: Date;
} & User &
  Person;
// const user1: Emploee = {}

type Developer = {
  skills: string[];
  phone: string;
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code?: (arg: string) => void;
} & Emploee;

export {};
