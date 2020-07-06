// more info at https://paul.kinlan.me/face-detection/
const faceDetector = new window.FaceDetector();
const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');
console.log(optionsInputs);
const options = {
    SIZE: 8,
    SCALE: 1.5,
};
function handleOption(e) {
    const { value, name } = e.currentTarget;
    options[name.toUpperCase()] = parseFloat(value);

    console.log(options);
}
optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// console.log(video, ctx, faceCanvas, faceCtx, faceDetector);

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
    });
    video.srcObject = stream;
    await video.play();
    // video.width = video.videoWidth / 2;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

async function detect() {
    const faces = await faceDetector.detect(video);
    // get next animation frame
    requestAnimationFrame(detect);
    faces.forEach(drawFace);
    faces.forEach(censor);
}

function drawFace(face) {
    // console.log(face);
    const { width, height, top, left } = face.boundingBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // console.log({ width, height, top, left });
    ctx.strokeStyle = '#ffc600';

    ctx.lineWidth = 2;

    ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
    faceCtx.imageSmoothingEnabled = false;
    faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
    // takes bouding box property from the face object argument, and rename to face
    faceCtx.drawImage(
        video,
        face.x,
        face.y,
        face.width,
        face.height,
        face.x,
        face.y,
        options.SIZE,
        options.SIZE
    );
    const width = face.width * options.SCALE;
    const height = face.height * options.SCALE;
    faceCtx.drawImage(
        faceCanvas,
        face.x,
        face.y,
        options.SIZE,
        options.SIZE,
        face.x - (width - face.width) / 2,
        face.y - (height - face.height) / 2,
        width,
        height
    );
}

populateVideo().then(detect);
