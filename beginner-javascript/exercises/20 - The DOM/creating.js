// const myParagraph = document.createElement('p');

// myParagraph.textContent = 'I am a P';
// myParagraph.classList.add('special');

// console.log(myParagraph);

// const myImage = document.createElement('img');
// myImage.src = 'https://source.unsplash.com/random/300x300';
// myImage.alt = 'Nice photo';
// console.log(myImage);

// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');

// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);
// console.log(myDiv);
// document.body.appendChild(myDiv);

// const heading = document.createElement('h2');
// heading.textContent = 'Cool Things!';

// myDiv.insertAdjacentElement('afterbegin', heading);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const liWrapper = document.createElement('div');

liWrapper.classList.add('wrapper');
li1.textContent = 'One';
li2.textContent = 'Two';
li3.textContent = 'Three';
li4.textContent = 'Four';
li5.textContent = 'Five';

ul.appendChild(li3);
ul.insertAdjacentElement('afterbegin', li1);
li3.insertAdjacentElement('beforebegin', li2);
li3.insertAdjacentElement('afterend', li4);
ul.insertAdjacentElement('beforeend', li5);
liWrapper.appendChild(ul);
console.log(liWrapper);

document.body.insertAdjacentElement('afterbegin', liWrapper);
