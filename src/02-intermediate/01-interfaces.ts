export interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

export interface User {
  isOnline?: boolean;
}

// interface Window {
//   isAuth?: boolean;
// }
// window.isAuth;

export interface Person {
  readonly firstName: string;
  lastName: string;
  pthone?: string;
  yearOfBirth: number;
}

export interface Emploee extends User, Person {
  contractStart: Date;
}

export interface Developer extends Emploee {
  skills: string[];
  phone: string;
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code?: (arg: string) => void;
}

// class MyDeveloper implements Developer {}
