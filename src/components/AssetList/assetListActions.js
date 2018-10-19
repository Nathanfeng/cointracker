
export const DELETE_COIN = 'DELETE_COIN';

export const deleteCoin = (symbol) => {
  return ({
    type: DELETE_COIN,
    payload: symbol
  })

}
