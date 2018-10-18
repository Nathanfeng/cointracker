import store from '../../store';

export const UPDATE_COIN_PRICE = 'UPDATE_COIN_PRICE';
const updateCoins = (coinInfo) => {
  return ({
    type: UPDATE_COIN_PRICE,
    payload: coinInfo
  })
}

// export const UPDATE_COIN_OWNERSHIP = 'UPDATE_COIN_OWNERSHIP'
// export updateOwnership = (coin, owned) => {
//   return({
//     type: UPDATE_COIN_OWNERSHIP,
//     payload: {coin, owned}
//   })
//
// }

export const getCoinInfo = (symbol, owned) => {
  return async (dispatch) => {
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`;
    const api_return = await fetch(url);
    console.log(api_return);
    const data = {
      symbol,
      price: api_return.USD,
      owned
    }
    dispatch(updateCoins(data));
  }
}
