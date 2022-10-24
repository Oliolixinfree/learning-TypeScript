// Оператор !

let word: string | null = null;

const num = 10;

if (num > 5) {
  word = 'acb';
}

console.log(word!.toLowerCase());

function printName(name?: string) {
  // const fullName: string = name; // Type 'string | undefined' is not assignable to type 'string'.
  const fullName: string = name!;
}

interface Person {
  name: string;
  age: number;
  sex: 'male' | 'female';
}

function printName2(person?: Person) {
  console.log(person!.age);
}

const people: Person[] = [
  {
    name: 'John',
    age: 12,
    sex: 'male',
  },
  {
    name: 'Max',
    age: 22,
    sex: 'male',
  },
  {
    name: 'Helen',
    age: 20,
    sex: 'female',
  },
];

// const malePeople = people.find((person) => person.sex === 'male'); // const malePeople: Person | undefined
const malePeople = people.find((person) => person.sex === 'male')!; // const malePeople: Person

export {};
