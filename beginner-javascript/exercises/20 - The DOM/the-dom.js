// // const heading = document.querySelector('h2');
// // // console.log(heading.textContent);
// // // console.log(heading.innerText);
// // // // heading.textContent = 'Adam is cool';
// // // console.dir(heading);
// // // console.log(heading.textContent);
// // console.log(heading.innerHTML);
// // console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕 🍕 🍕 🍕 🍕');
// pizzaList.insertAdjacentText('afterbegin', '🍕 🍕 🍕 🍕 🍕');
// pizzaList.insertAdjacentText('beforebegin', '😊');
// pizzaList.insertAdjacentText('afterend', '😊');

const pic = document.querySelector('.nice');
pic.classList.add('round');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
