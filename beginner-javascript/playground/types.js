console.log('it works');
const name = 'Adam';
const middle = 'David';
const last = 'Ponting';

const song = 'oh  \nyeah\n i\nlike\n   piza';

const html = `
    <div>${name}
        <h2>hello</h2>
    </div>
    `;

const hello = `Hello my name is ${name + test()}. Nice to meet you. I am ${40 + 20} years old`;
console.log(hello);

function test() {
  return ' Arcgh!';
}

document.body.innerHTML = html;
