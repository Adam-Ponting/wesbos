const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('p.to_amount');
const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};
const form = document.querySelector('.app form');
const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
};

function generateOptions(options) {
    return Object.entries(options)
        .map(([currencyCode, currencyName]) => {
            return `<option value="${currencyCode}">${currencyCode}: ${currencyName}</option>`;
        })
        .join('');
}

async function fetchRates(base = 'USD') {
    const response = await fetch(`${endPoint}?base=${base}`);
    const rates = await response.json();
    return rates;
}

async function convert(amount, from, to) {
    if (!ratesByBase[from]) {
        console.log(`Oh no, no ${from} to convery to ${to}`);
    }
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    return convertedAmount;
}

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

function formatCurrency(amount, currency) {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(amount);
}

async function handleInput(e) {
    const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
    console.log(rawAmount);
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
form.addEventListener('input', handleInput);
