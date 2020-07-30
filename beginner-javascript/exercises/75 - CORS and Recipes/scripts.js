const baseEndPoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

// async function fetchRecipes(query) {
//     const response = await fetch(`${baseEndPoint}/?q=${query}`);
//     const data = await response.json();
//     console.log(data);
// }
async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndPoint}?q=${query}`);
    const data = await res.json();
    return data;
}

function displayRecipes(recipes) {
    console.log(recipes);
    const html = recipes.map((recipe) => {
        return `<div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${recipe.thumbnail ? `<img src="${recipe.thumbnail}" alt="heya" />` : ''}
        <a href="${recipe.href}">View recipe</a>
        </div>`;
    });
    recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(searchTerm) {
    form.submit.disabled = true;
    // console.log(form);
    const recipes = await fetchRecipes(searchTerm).catch(function(err) {
        console.log(err);
    });
    form.submit.disabled = false;
    displayRecipes(recipes.results);
}

async function handleSubmit(event) {
    event.preventDefault();
    fetchAndDisplay(form.query.value);
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');
