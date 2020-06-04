const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // debugger;
  console.log(person.name);
  // console.groupCollapsed(`Starting ${person.name}`);
  // console.log(person.name);
  // console.log(person.country);
  // console.log(person.cool);
  // console.groupEnd(`Starting ${person.name}`);
  // if (person.name === 'Wes') {
  //   console.warn(person.name);
  // } else console.log(person);
});
// console.table(people);
// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('doing some stuff');
  console.log('1');
  console.log('1');
  console.warn('watch it!');
  console.error('watch it!');
  console.groupEnd('doing some stuff');
}

function doctorize(name) {
  // console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}
function bootstrap() {
  console.log('starting the app');
  go();
}
// bootstrap();
const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
