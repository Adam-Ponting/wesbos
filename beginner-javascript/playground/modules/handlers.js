export async function handleButtonClick(e) {
    // const currenciesModule = await import('./currencies.js');
    const { localCurrency, default: currency } = await import('./currencies.js');
    console.log(e);
    console.log(localCurrency, currency);
}
