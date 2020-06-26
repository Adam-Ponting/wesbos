// select the elements
// canvas, shake
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

// setup canvas for drawing
// destructuring from canvas properties
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.linejoin = 'miter';
ctx.lineCap = 'square';
ctx.lineWidth = 40;
let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // from
ctx.lineTo(x, y); // to
ctx.stroke(); // draw it

// write a draw function
function draw({ key }) {
    // destructure to get the key property
    console.log(hue);
    hue += 20;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

    console.log(key);
    ctx.beginPath(); // start the drawing
    ctx.moveTo(x, y); // from
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y); // to
    ctx.stroke(); // draw it
}
// write a handler for keys
function handleKey(event) {
    if (event.key.includes('Arrow')) {
        event.preventDefault();
        draw({ key: event.key }); // send in an object
    }
}

// write clear/shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend',
        function() {
            canvas.classList.remove('shake');
        },
        { once: true }
    );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);

shakeButton.addEventListener('click', clearCanvas);
