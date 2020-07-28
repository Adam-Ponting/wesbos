function wait(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);
    popup.remove();
    popup = null;
}

function ask(options) {
    return new Promise(async function(resolve) {
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML(
            'afterbegin',
            `
            <fieldset>
                <label>${options.title}</label>
                <input type="text" name="input" />
                <button type="submit">Submit</button>
            </fieldset>
        `
        );
        if (options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            skipButton.addEventListener(
                'click',
                function() {
                    resolve(null);
                    destroyPopup(popup);
                },
                { once: true }
            );
            popup.firstElementChild.insertAdjacentElement('beforeend', skipButton);
        }
        popup.addEventListener(
            'submit',
            function(e) {
                e.preventDefault();
                console.log('submitted');
                // console.log(e.target);
                // console.log(e.target.input);
                // console.log(e.target.input.value);
                resolve(e.target.input.value);
                destroyPopup(popup);
            },
            { once: true }
        );

        document.body.appendChild(popup);
        await wait(100);
        popup.classList.add('open');
    });
}

async function askQuestion(e) {
    const el = e.currentTarget;
    const shouldCancel = 'cancel' in el.dataset;
    const answer = await ask({ title: el.dataset.question, cancel: shouldCancel });
    console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((b) => {
    b.addEventListener('click', askQuestion);
});

const questions = [
    { title: 'What is your name?' },
    { title: 'What is your age?', cancel: true },
    { title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
    const results = [];
    for (const item of array) {
        const result = await callback(item);
        results.push(result);
    }
    return results;
}

async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}
go();
// Promise.all(questions.map(ask)).then((data) => console.log(data));
// const answers = Promise.all([
//     ask(questions[0]),
//     ask(questions[1]),
//     ask(questions[2]),
// ]).then((answers) => console.log(answers));
