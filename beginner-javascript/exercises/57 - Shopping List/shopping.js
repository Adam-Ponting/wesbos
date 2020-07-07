const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function handleSubmit(event) {
    event.preventDefault();
    const name = event.currentTarget.item.value; // access name input by name attribute (as is in a form)
    if (!name) return; // if input is empty, quit
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };
    items.push(item);
    event.currentTarget.reset(); // clears all form inputs
    // console.log(items);
    // displayItems(); // changed to custom events
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    const html = items
        .map((item) => {
            return `
    <li class="shopping-item">
        <input 
            type="checkbox" 
            value="${item.id}" 
            ${item.complete ? 'checked' : ''}
        />
        <span 
            class="itemName"
        >${item.name}</span>
        <button 
            aria-label="Remove ${item.name}"
            value="${item.id}"
        >
            &times;
        </button>
    </li>`;
        })
        .join('');
    // console.log(html);
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items)); // convert object to string
}

function restoreFromLocalStorage() {
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if (lsItems && lsItems.length) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function handleDelete(id) {
    items = items.filter((item) => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));

    console.log(items);
}

function markAsComplete(id) {
    console.log(id, 'complete');
    const itemRef = items.find((item) => item.id === id);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));

    console.log(itemRef);
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

window.onload = restoreFromLocalStorage();

// list for click on list, checks if it is then a button that was clicked
list.addEventListener('click', function(e) {
    const id = parseInt(e.target.value);
    if (e.target.matches('button')) {
        handleDelete(id);
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(parseInt(id));
    }
});
