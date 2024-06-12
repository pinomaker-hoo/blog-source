function readonly(target: any, key: string, descriptor: PropertyDescriptor) {}

class Cat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @readonly
  meow() {
    return `${this.name} says Meow!`;
  }
}

// class Cat {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   @readonly
//   meow() {
//     return `${this.name} says Meow!`;
//   }

//   meow2() {
//     return `${this.name} says Meow!`;
//   }
// }

// const cat = new Cat("Whiskers");
// cat.meow2 = () => "Purr!";

// console.log(cat.meow());
// console.log(cat.meow2());

// console.log(Object.getOwnPropertyDescriptors(Cat.prototype));
// console.log(Object.getOwnPropertyDescriptor(Cat.prototype, "meow"));
// console.log(Object.getOwnPropertyDescriptor(Cat.prototype, "meow2"));
