
export const UPDATE_COIN_PRICE = 'UPDATE_COIN_PRICE';
const updateCoins = (coinInfo) => {
  return ({
    type: UPDATE_COIN_PRICE,
    payload: coinInfo
  })
}

export const getCoinInfo = (symbol, owned) => {
  return async (dispatch) => {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`;
    const api_return = await fetch(url);
    const response = await api_return.json()
    const data = {
      symbol,
      price: response.USD,
      owned
    }
    console.log(data);
    dispatch(updateCoins(data));
  }
}
