
// 1.
//function User(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// const user = new User('Brendan', 32, 2000);

// console.log(user instanceof User);

// 2.
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// function Employee(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const e = new Employee ('Tommy', 30);


// console.log( 'first', e instanceof User);
// console.log( 'second', e instanceof Employee);


// 3.

// function User(name,lastname) {
//     this.name = name;
//     this.lastname = lastname;
// }
// function Weirdo(name,lastname) {
//     this.name = name;
//     this.lastname = lastname;
// }

// const weirdo = new User('Tommy', 'Conlon');

// console.log( 'first', weirdo instanceof Weirdo); // false
// console.log( 'second', weirdo instanceof User); // true

// 4.

// function* rangeGenerator(start,count,step) {}

// function range(start, count, step) {}

// range(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// range(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// range(2020, 3); // [2020, 2021, 2022]

// 6.

// new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     });
//   }).then(() => {
//     console.log('promise');
//   });

//   setTimeout(() => {
//     console.log('timeout');
//   });

//   console.log('hello');

//   requestIdleCallback(() => {
//     console.log('requestIdleCallback');
//   });

// 3 1 2 4

// 7.

// setTimeout(() => console.log('timeout 1'));

// Promise.resolve().then(() => setTimeout(() => console.log('timeout 2')));

// Promise.resolve().then(() => console.log('promise 1'));

// Promise.resolve().then(() => console.log('promise 2'));

// setTimeout(() => console.log('timeout 3'));

// 3 4 1 5 2 

// 8.

// globalThis.name = 'foo';

// function log(name) {
//   new Function('\tconsole.log(name);')();
// }

// log('bar');

// bar

// 9.
// const obj = {
//     name: 'foo',
//     log: function () {
//       console.log(this.name);
//     },
//   };

//   const log = obj.log;

//   log();

  //foo

//   10.

//   const person = {
//     name: 'foo',
//     age: 20,
//     [Symbol.toPrimitive](hint) {
//         if(hint === "number")
//         return 20;
//     },

//   };

//   console.log(Number(person) + 10); // 30
//   `${person} is ${Number(person) > 18 ? 'adult' : 'child'}`; // 'foo is adult'





 