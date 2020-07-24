function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery found');
    }
    this.gallery = gallery;
    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');

    this.showNextImage = this.showNextImage.bind(this);
    this.showPreviousImage = this.showPreviousImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.images.forEach((img) => {
        img.addEventListener('click', (e) => this.showImage(e.currentTarget));
    });
    this.images.forEach((image) =>
        image.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') return this.showImage(e.currentTarget);
        })
    );
}

Gallery.prototype.openModal = function() {
    if (this.modal.matches('.open')) {
        console.info('modal already open');
        return;
    }
    // listen for keys
    this.modal.classList.add('open');
    window.addEventListener('keyup', this.handleKeyUp);
    this.modal.addEventListener('click', this.handleClickOutside);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPreviousImage);
};
Gallery.prototype.handleClickOutside = function(e) {
    if (e.target === e.currentTarget) {
        this.closeModal();
    }
};
Gallery.prototype.handleKeyUp = function(e) {
    if (e.key === 'Escape') return this.closeModal();
    if (e.key === 'ArrowRight')
        return this.showImage(
            this.currentImage.nextElementSibling || this.gallery.firstElementChild
        );
    if (e.key === 'ArrowLeft')
        return this.showImage(
            this.currentImage.previousElementSibling || this.gallery.lastElementChild
        );
};

Gallery.prototype.closeModal = function() {
    this.modal.classList.remove('open');
    window.removeEventListener('keyup', this.handleKeyUp);
    this.modal.removeEventListener('click', this.handleClickOutside);
    this.nextButton.removeEventListener('click', this.showNextImage);
    this.prevButton.removeEventListener('click', this.showPreviousImage);
};

Gallery.prototype.showImage = function(el) {
    if (!el) {
        console.info('no image to show');
        return;
    }
    // console.log(el);
    this.modal.querySelector('img').src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('figure p').textContent = el.dataset.description;
    this.currentImage = el;
    this.openModal();
};
Gallery.prototype.showNextImage = function() {
    console.log(this);
    this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
};
Gallery.prototype.showPreviousImage = function() {
    this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
