export const loadTickers = tickers =>
    fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(
            ","
        )}`
    ).then(r =>r.json());