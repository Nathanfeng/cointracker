import store from '../../store';

export const UPDATE_COIN = 'UPDATE_COIN';
const updateCoins = (coinInfo) => {
  return ({
    type: UPDATE_COIN
    payload: coinInfo
  })
}

export const getCoinInfo = () => {
  return async (dispatch) => {
    
  }
}
