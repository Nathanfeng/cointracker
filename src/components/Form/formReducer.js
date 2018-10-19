import {UPDATE_COIN_PRICE} from './formActions';
import {DELETE_COIN} from '../AssetList/assetListActions';

const initial_state = {
  coins: []
}

const formReducer = (state = initial_state, action) =>{
  console.log(action)
  switch(action.type){
    case UPDATE_COIN_PRICE:
      return {
        coins: [
          ...state.coins,
          action.payload
        ]
      };
    case DELETE_COIN:
      return {
        coins: state.coins.filter((coin) => coin.symbol !== action.payload)
      };
    default:
      return initial_state;
  };
}

export default formReducer;
