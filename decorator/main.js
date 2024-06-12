const readonly = (target, key, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};

class Cat {
  name;
  constructor(name) {
    this.name = name;
  }

  @readonly
  meow() {
    return `${this.name} says Meow`;
  }
}

const cat = new Cat("Tom");
console.log(cat.meow());
