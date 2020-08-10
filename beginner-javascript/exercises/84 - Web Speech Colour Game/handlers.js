import { isValidColor } from './colors';

function logWords(results) {
    // console.log(results[results.length - 1][0].transcript);
}
export function handleResult({ results }) {
    logWords(results);
    const words = results[results.length - 1][0].transcript;
    console.log(words);
    let color = words.toLowerCase();
    color = color.replace(/\s/g, '');
    if (!isValidColor(color)) {
        console.log('nope');
        return;
    } else {
        const colorSpan = document.querySelector(`.${color}`);
        colorSpan.classList.add('got');
        console.log(colorSpan);
        console.log('is valid');
        document.body.style.background = color;
    }
}
