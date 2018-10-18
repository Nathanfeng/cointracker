
const initial_state = {
  coins: {}
}

const reducer = (state, action) =>{
  switch(action.type){
    case "UPDATE_COIN_PRICE":
      return {
        coins: Object.assign({}, action.payload)
      }
    default:
      return initial_state;
  }
}

export default reducer
