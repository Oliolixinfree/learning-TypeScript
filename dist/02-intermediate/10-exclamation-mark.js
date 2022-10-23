"use strict";
// Оператор !
let word = null;
const num = 10;
if (num > 5) {
    word = 'acb';
}
console.log(word.toLowerCase());
function printName(name) {
    // const fullName: string = name; // Type 'string | undefined' is not assignable to type 'string'.
    const fullName = name;
}
function printName2(person) {
    console.log(person.age);
}
const people = [
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
const malePeople = people.find((person) => person.sex === 'male'); // const malePeople: Person
