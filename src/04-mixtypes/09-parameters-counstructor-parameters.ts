// Утилиты Parameters, CounstructorParameters
export {};

function f1(arg: { a: number; b: string }) {
  return arg.a + arg.b;
}

type T0 = ReturnType<typeof f1>; // type = string

type T1 = Parameters<typeof f1>; // type T1 = [arg: {a: number; b: string;}]

type T2 = ConstructorParameters<ErrorConstructor>; // type T2 = [message?: string | undefined]

class Car {
  constructor(brand: string, model: string) {}
}

type T3 = ConstructorParameters<typeof Car>; // type T3 = [brand: string, model: string]
