const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
];
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

async function fetchJoke() {
    loader.classList.remove('hidden');
    jokeButton.classList.add('hidden');
    jokeHolder.classList.add('hidden');
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    });
    const data = await response.json();
    console.log(data);
    loader.classList.add('hidden');
    jokeButton.classList.remove('hidden');
    jokeHolder.classList.remove('hidden');

    return data;
}

function randomItemFromArray(arr, not) {
    // console.log(arr, not);
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item === not) {
        console.log('******* used **********', item);
        return randomItemFromArray(arr, not);
    }
    return item;
}

async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
