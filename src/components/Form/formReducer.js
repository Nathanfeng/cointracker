import {UPDATE_COIN_PRICE} from './formActions';
// import store from '../../store';

const initial_state = {
  coins: []
}

const formReducer = (state = initial_state, action) =>{
  console.log(action)
  // console.log(store.getState())
  switch(action.type){
    case UPDATE_COIN_PRICE:
      return {
        coins: [
          ...state.coins,
          action.payload
        ]
      }
    default:
      return initial_state;
  }
}

export default formReducer
