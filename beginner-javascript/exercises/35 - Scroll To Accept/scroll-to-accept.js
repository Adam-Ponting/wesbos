const terms = document.querySelector('.terms-and-conditions');
// const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');
// eslint-disable-next-line no-use-before-define
const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
});

function obCallBack(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
}
// ob.observe(watch);
ob.observe(terms.lastElementChild);

// function handleScrollEvent(e) {
//     // console.log(e.currentTarget.scrollHeight);
//     // console.log(e.currentTarget.scrollTop);
//     // console.log(e.currentTarget.outer);
// }
// terms.addEventListener('scroll', handleScrollEvent);
