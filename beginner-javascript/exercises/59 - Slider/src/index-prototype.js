function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }

    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    this.startSlider();
    this.applyClasses();

    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
    this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    // console.log({ current, prev, next });
};

Slider.prototype.applyClasses = function() {
    this.prev.classList.add('prev');
    this.current.classList.add('current');
    this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
    console.log(this);
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if (direction === 'back') {
        // make an new array of the new values, and destructure them over and into the prev, current and next variables
        [this.prev, this.current, this.next] = [
            // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
            this.prev.previousElementSibling || this.slides.lastElementChild,
            this.prev,
            this.current,
        ];
    } else {
        [this.prev, this.current, this.next] = [
            this.current,
            this.next,
            // get the next slide, or if it's at the end, loop around and grab the first slide
            this.next.nextElementSibling || this.slides.firstElementChild,
        ];
    }

    this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
console.log(mySlider, dogSlider);

window.dogSlider = dogSlider;

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowRight') {
        dogSlider.move();
    }
    if (e.key === 'ArrowLeft') {
        dogSlider.move('back');
    }
});
