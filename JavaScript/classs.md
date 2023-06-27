### class 
```

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

<!-- Access the static by className.staticName -->
```