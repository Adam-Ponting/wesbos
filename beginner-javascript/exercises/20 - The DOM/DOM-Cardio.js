// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const myListItem1 = document.createElement('li');
const myListItem2 = document.createElement('li');
const myListItem3 = document.createElement('li');
myListItem1.textContent = 'One';
myListItem2.textContent = 'Two';
myListItem3.textContent = 'Three';

// put that list into the above wrapper
myList.appendChild(myListItem1);
myList.appendChild(myListItem2);
myList.appendChild(myListItem3);
myDiv.appendChild(myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://source.unsplash.com/random/400x400';

// set the width to 250
myImg.width = 250;
myImg.height = 250; // stops image jumping

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myDiv2 = `
    <div>
        <p>p1</p>
        <p>p2</p>
    </div>
`;

// put this div before the unordered list from above
// const range = document.createRange();
// const fragment = range.createContextualFragment(myDiv2);
myList.insertAdjacentHTML('beforebegin', myDiv2);

// add a class to the second paragraph called warning
const wrapper = document.querySelector('.wrapper');
wrapper.children[0].children[1].classList.add('warning');

// remove the first paragraph
wrapper.children[0].children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name, age, height) => {
  return `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
        </div>
    `;
};
// console.log(generatePlayerCard('jon', 2, 100));

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
const card1 = generatePlayerCard('claire', 1, 100);
const card2 = generatePlayerCard('adam', 2, 200);
const card3 = generatePlayerCard('james', 3, 300);
const card4 = generatePlayerCard('sophie', 4, 400);

// append those cards to the div
cardDiv.insertAdjacentHTML('afterbegin', card4);
cardDiv.insertAdjacentHTML('afterbegin', card3);
cardDiv.insertAdjacentHTML('afterbegin', card2);
cardDiv.insertAdjacentHTML('afterbegin', card1);

// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const cards = document.querySelectorAll('.playerCard');
cards.forEach((el) => {
  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Remove';
  btnDelete.type = 'button';
  el.appendChild(btnDelete);
  btnDelete.addEventListener('click', function() {
    el.remove();
  });
});
