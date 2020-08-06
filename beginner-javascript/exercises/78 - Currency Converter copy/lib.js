import { fromSelect, toSelect } from './elements.js';
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
    const response = await fetch(`${endPoint}?base=${base}`);
    const rates = await response.json();
    return rates;
}

export async function convert(amount, from, to) {
    if (!ratesByBase[from]) {
        console.log(`Oh no, no ${from} to convery to ${to}`);
    }
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    return convertedAmount;
}

export function init() {
    const form = document.querySelector('.app form');

    const optionsHTML = generateOptions(currencies);
    fromSelect.innerHTML = optionsHTML;
    toSelect.innerHTML = optionsHTML;

    form.addEventListener('input', handleInput);
}
