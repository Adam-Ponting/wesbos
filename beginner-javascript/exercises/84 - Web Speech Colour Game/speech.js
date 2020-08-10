import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorEl = document.querySelector('.colors');

function displayColors(colors) {
    return colors
        .map(
            (color) =>
                `<span class="color ${color} ${
                    isDark(color) ? 'dark' : ''
                }" style="background:${color}">${color}</span>`
        )
        .join('');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
function start() {
    if (!('SpeechRecognition' in window)) {
        console.log('Error, no speech!');
        return;
    } else {
        console.log('does work');
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = handleResult;
        recognition.start();
    }
}
start();
colorEl.innerHTML = displayColors(colorsByLength);
