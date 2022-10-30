interface ICar {
  go(speed: number): void;
  maxSpeed?: number;
}
export class Car implements ICar {
  go(speed: number) {
    console.log('go', speed);
  }
  stop() {
    console.log('stop');
  }
}

const car = new Car();
car.go(23);
// car.maxSpeed = 100; //Error
