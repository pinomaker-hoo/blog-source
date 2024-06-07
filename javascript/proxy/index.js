// const target = {};

// const proxy = new Proxy(target, {});

// proxy.test = 5;
// console.log(target.test);

// console.log(proxy.test);

// for (let key in proxy) console.log(key);

// const nums = [1, 2, 3];

// const proxyNums = new Proxy(nums, {
//   get(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return 0;
//     }
//   },
// });

// console.log(proxyNums[1]);
// console.log(proxyNums[123]);

// console.log(nums[100]);

// const person = {
//   name: "John",
//   introduce: "I'm John",
// };

// const personProxy = new Proxy(person, {
//   get(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return prop;
//     }
//   },
// });

// console.log(personProxy.name);
// console.log(personProxy.age);
// console.log(personProxy.introduce);

// let numbers = [];

// numbers = new Proxy(numbers, {
//   // (*)
//   set(target, prop, val) {
//     // 프로퍼티에 값을 쓰는 동작을 가로챕니다.
//     if (typeof val == "number") {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// numbers.push(1); // 추가가 성공했습니다.
// numbers.push(2); // 추가가 성공했습니다.
// console.log("Length is: " + numbers.length); // 2

// numbers.push("test"); // Error: 'set' on proxy

// console.log("윗줄에서 에러가 발생했기 때문에 이 줄은 절대 실행되지 않습니다.");

// Object.getOwnPropertyDescriptor(numbers, "length");

function foo() {}

console.log(foo.name); // "foo"

foo.name = "Bar";

console.log(foo.name); // "foo"

console.log(Reflect.getOwnPropertyDescriptor(foo, "name"));

Reflect.defineProperty(foo, "name", {
  writable: true,
});

foo.name = "bar";

console.log(foo.name); // 'bar' ==> 성공!
