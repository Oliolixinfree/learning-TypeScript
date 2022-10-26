// Утилиты Record, Pick, Omit
export {};

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';
type Names = Record<string, number>; //type Names = {[x: string]: number;}
type BrandNames = Record<WellKnownBrands, string>;
// const myBrands: BrandNames = {
//   apple: '',
// }

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
// type SimpleTodo = {id: string; title: string; completed: boolean;}
type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>;
const todo1: SimpleTodo = {
  id: 'sad',
  title: 'Learn TS',
  completed: false,
};

// type SimpleTodo2 = {id: string; title: string; completed: boolean;}
type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;

// type NewTodo = {title: string; description: string;}
type NewTodo = Pick<Todo, 'title' | 'description'>;
