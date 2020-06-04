// function doctorize(firstName) {
//   return `DR. ${firstName}`;
// }

// function(firstName) {
//     return `DR. ${firstName}`;
// }
// console.log(doctorize2('wes'));

// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };
// console.log(doctorize());

// const inchToCM = (inches) => inches * 2.54;
// console.log(inchToCM(2));

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
// const add = (a, b = 3) => a + b;
// console.log(add(2));

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }
// console.log(makeABaby('a', 'p'));

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
// console.log(makeABaby('a', 'p'));
// (function(age) {
//   console.log('adam', age);
//   console.log(`You are cool, ${age}`);
// })(100);

const wes = {
  name: 'Wes Bos',
  sayhi: function() {
    return this.name;
  },
  yellHi() {
    console.log('HEY WESSSSSSSS');
    return this;
  },
  whisperHi: () => {
    return this;
  },
};
// // console.log(wes);

// const button = document.querySelector('.click');
// console.log(button);

// function handleClick() {
//   console.log('great clicking');
// }

// button.addEventListener('click', (e) => console.log('nice jobs', e));
setTimeout(() => console.log('anon'), 2000);
