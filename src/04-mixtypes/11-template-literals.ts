// Шаблонные литералы
export {};

type Side = 'top' | 'right' | 'bottom' | 'left';

// type Padding = "padding-top" | "padding-right" | "padding-bottom" | "padding-left"
type Padding = `padding-${Side}`;

// Capitalize, Uncapitalize, Lowercase, Uppercase
// type Margin = "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft"
type Margin = `margin${'' | Capitalize<Side>}`;

type Direction = 'down' | 'left' | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';
// type FadeClassNames = "fadeIn" | "fadeInTop" | "fadeInRight" | "fadeInBottom"
//   | "fadeInLeft" | "fadeInDown" | "fadeInUp" | "fadeOut" | "fadeOutTop"
//   | "fadeOutRight" | "fadeOutBottom" | "fadeOutLeft" | "fadeOutDown" | "fadeOutUp"
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`;

interface Car {
  brand: string;
  model: string;
  year: number;
}

// type CarFactory = {
//   setBrand: (car: Car, value: string) => void;
//   setModel: (car: Car, value: string) => void;
//   setYear: (car: Car, value: number) => void;
// }
type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void;
};
