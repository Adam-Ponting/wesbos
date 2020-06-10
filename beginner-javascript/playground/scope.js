// const age = 100;

// function go() {
//   const hair = 'blonde';
//   const myAge = 200;
//   console.log(hair);
//   console.log(age);
//   console.log(myAge);
// }
// go();

/* eslint-disable */

// function isCool(name) {
//   let cool;
//   if (name === 'wes') {
//     cool = true;
//   }
//   if (name === 'adam') {
//     // cool = false;
//   }
//   console.log(cool);
//   return cool;
// }
// isCool('a');

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const dog = 'Snickers';

// function logDog(dog) {
//   console.log(dog);
// }

// function go() {
//   const dog = 'Sunny';
//   logDog('Rufus');
// }
// go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
sayHi('wes');
yell();
