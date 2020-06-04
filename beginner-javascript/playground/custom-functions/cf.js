function calculateBill() {
  console.log('Running calculateBill');
  const total = 100 * 1.13;
  //   console.log(total);
  return total;
}
const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);

console.log(`Your total is $${calculateBill() - '2'}`);
