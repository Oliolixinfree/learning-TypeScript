interface Car {
  brand: string;
  year: number;
  type: string;
  isNew: boolean;
  horsePower?: number;

  [key: string]: unknown;
}

const car: Car = {
  brand: 'Skoda',
  year: 2022,
  type: 'Hatchback',
  isNew: true,
  horsePower: 200,
};

car['go'] = true;
