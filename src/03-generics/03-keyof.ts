type WindowProp = keyof Window;

const myValue: WindowProp = 'ontoggle';

interface PC {
  brand: string;
  year: string;
}

type Type1 = keyof PC; // brand | year
const val1: Type1 = 'brand';

type Tup1 = keyof [string, number];
const val2: Tup1 = 'map';

export {};
