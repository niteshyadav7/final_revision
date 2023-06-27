// Creating Constructor using new Key words

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const nitesh = new Person("nitesh", 2000);
// const golu = new Person("golu", 2000);
// console.log(golu instanceof Person);
// console.log(nitesh, golu);
// 1.new {} created.
// 2.this={}
// 3.{} linked to prototype
// 4.function automatcally return

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const nitesh = new Person("Nitesh", 2000);

// console.log(nitesh);

// console.log(Person.prototype.constructor);

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// nitesh.calcAge();
// Person.prototype.spices = "Homo Sapiens";
// console.log(nitesh.__proto__);
// Coding Challenge:1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const car = new Car("BMW", 120);

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`The Speed of ${this.make} is ${this.speed}.`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`The Speed of ${this.make} is ${this.speed}`);
// };

// car.accelerate();
// car.accelerate();
// car.brake();
// car.accelerate();

// ES 6 class

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

// const nitesh = new PersonCl("nitesh", 2000);
// console.log(nitesh);

// Example ::Using
// without ES6

// const Person = function (firstName, birthYear) {
// this are instances
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person("nitesh", 2000);
// console.log(jonas);
// create method::
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };
// console.log(Person.prototype);

// jonas.calcAge();

// with ES6
/** 
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Namaste ${this.firstName}`);
  }
}
const jonas = new PersonCl("Nitesh", 2000);
console.log(jonas);
jonas.calcAge();
jonas.greet();
*/

// Coding Challenge 02::

// without ES6

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// without ES6

/**
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car = new Car("Honda", 120);
console.log(car);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
car.accelerate();
car.accelerate();
car.brake();
 */

// with ES6

/**
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
}
const car = new CarCl("Honda", 120);
console.log(car);
car.accelerate();
car.accelerate();
car.brake();
 */

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Carcl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at the speed of ${this.speed}Km/hr`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.speed} is going at the speed of ${this.speed}Km/hr`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = this.speed * 1.6;
//   }
// }
// const ford = new Carcl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// CLASS BASED COMPONENTS::

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} run at speed of ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} run at speed of ${this.speed}`);
  }
  static greet() {
    console.log("Hello, Nitesh 👋");
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = this.speed * 1.6;
    console.log(`${this.make} run at speed of ${this.speed}mi/hrs`);
  }
}

class EV extends Car {
  constructor(make, speed, auto) {
    super(make, speed);
    this.auto = auto;
  }
}
const ev = new EV("Ford", 120, true);
console.log(ev);

// const car = new Car("BMW", 120);
// console.log(car);

// // Access the static method::
// Car.greet();

// car.accelerate();
// car.accelerate();
// car.brake();

// // setter and getter
// console.log(car.speedUS);
// car.speedUS = 50;
// // car.speedUS();
