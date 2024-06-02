function deprecate(message) {
  return (target, name, descriptor) => {
    const origin = descriptor.value;
    console.log("Target: ", target);
    console.log("Origin: ", origin);
    console.log(`Deprecate warning[${name}]: ${message}`);
    return descriptor;
  };
}

class Example {
  @deprecate('Consider to use "newFunc" instead')
  oldFunc() {
    console.log("This is old function.");
  }
  newFunc() {
    console.log("This is new function.");
  }
}

const example = new Example();
example.oldFunc();
