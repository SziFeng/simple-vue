class Car {
  constructor(name, color) {
    console.log(`造${color}${name}`);
  }
}

class CarFactory {
  create (name, color) {
    return new Car(name, color)
  }
}

const CF = new CarFactory();
const c1 = CF.create('宝马', '红色');
const c2 = CF.create('奔驰', '白色');
const c3 = CF.create('ddd', '绿色');

