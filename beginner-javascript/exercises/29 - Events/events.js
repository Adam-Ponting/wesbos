// console.log('evens');
// const button = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('🐛 hi');
// }
// button.addEventListener('click', handleClick);
// coolButton.addEventListener('click', handleClick);
// coolButton.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('.buy');

function buyItem() {
  console.log('BUYING ITEM', this);
}
console.log(buyButtons);
buyButtons.forEach((el) => {
  el.addEventListener('click', buyItem);
});
