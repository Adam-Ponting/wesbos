function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running calculateBill');
  console.log(billAmount, taxRate);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// const wesTotal = 500;
// const wexTaxRate = 0.1;
// const myTotal = calculateBill(wesTotal, wexTaxRate);
// // console.log(myTotal);

// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }
// const greeting = sayHiTo('Wes');
// console.log(greeting);

// const kait = 201;
// const myTotal3 = calculateBill(kait + 10, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}
function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
// console.log(yell(doctorize('aram')));

const myBill4 = calculateBill(100, undefined, 0.5);
