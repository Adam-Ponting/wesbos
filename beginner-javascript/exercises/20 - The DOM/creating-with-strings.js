// const item = document.querySelector('.item');
const width = 75;
const src = `https://source.unsplash.com/random/${width}x50`;
const desc = 'Cute Pup <h1>LOVE THIS GUY</h1>';
const myHTML = `
       <div class="wrapper">
        <h2>Nice pic! ${desc}</h2>
        <img onload="alert('HACKED')" src="${src}" alt="${desc}" />
       </div> 
       
    `;
// item.innerHTML = `
//     <div>
//         <h1>Hey how are ya?</h1>
//         ${myHTML}
//     </div>
// `;

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.append(myFragment);
// console.log(myFragment);
// console.log(myFragment.querySelector('img'));
