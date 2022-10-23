// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

// Interfaces:
interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}
interface IVehicle {
  wheels: number;
  year: Date;
  brand: string;
}
interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}
// const car1: ICar = {};

// Types:
type Product = {
  price: string;
  isNew: boolean;
  isSale: boolean;
  title: string;
};
type Vehicle = {
  wheels: number;
  year: Date;
  brand: string;
};

// type Car = {
//   type: string;
//   model: string;
// } & Product &
//   Vehicle;

type Car = Product &
  Vehicle & {
    type: string;
    model: string;
  };
// const car2: Car = {};
