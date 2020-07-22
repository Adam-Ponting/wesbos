function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery found');
    }
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage = {};

    function openModal() {
        if (modal.matches('.open')) {
            console.info('modal already open');
            return;
        }
        // listen for keys
        modal.classList.add('open');
        window.addEventListener('keyup', handleKeyUp);
        modal.addEventListener('click', handleClickOutside);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPreviousImage);
    }
    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
    function handleKeyUp(e) {
        if (e.key === 'Escape') return closeModal();
        if (e.key === 'ArrowRight')
            return showImage(currentImage.nextElementSibling || gallery.firstElementChild);
        if (e.key === 'ArrowLeft')
            return showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function closeModal() {
        modal.classList.remove('open');
        window.removeEventListener('keyup', handleKeyUp);
        modal.removeEventListener('click', handleClickOutside);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPreviousImage);
    }

    function showImage(el) {
        if (!el) {
            console.info('no image to show');
            return;
        }
        // console.log(el);
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }
    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }
    function showPreviousImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    images.forEach((img) => {
        img.addEventListener('click', (e) => showImage(e.currentTarget));
    });
    images.forEach((image) =>
        image.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') return showImage(e.currentTarget);
        })
    );
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
