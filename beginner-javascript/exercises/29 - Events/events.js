const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick() {
  console.log('You clicked a button');
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.target === event.currentTarget);
}
buyButtons.forEach(function(el) {
  el.addEventListener('click', handleBuyButtonClick);
});
window.addEventListener(
  'click',
  function(event) {
    console.log('window');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: false }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
  console.log(event.currentTarget);
  console.log(this);
});
