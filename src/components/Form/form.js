import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCoinInfo} from './formActions';

const Form = (props) => {
  const includeCoin = (coinType) => {
    let coinArray = props.coins;
    for(let i =0; i< coinArray.length; i++) {
      if (coinArray[i].symbol === coinType) {
        return true;
      }
    }
    return false;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const coin = e.target.elements.coin.value;
    const amount = e.target.elements.amount.value;
    console.log(includeCoin(coin))
    if (amount < 0){
      alert('cant have negative amount owned');
    } else if(includeCoin(coin)) {
      alert('you already entered that coin');
    } else {
      props.updateCoinInfo(coin, amount);
    }
    e.target.elements.coin.value = '';
    e.target.elements.amount.value = '';
  }

  return (
    <div>
      <h3>Enter the symbol for the coins you want to track</h3>
      <form onSubmit={onSubmit}>
        <input
          placeholder='Coin Symbol ie. BTC'
          type='text'
          name='coin'
        /> <br/>
        <input type="number" name='amount' step='any' placeholder='amount owned ie. 0.5'/> <br/>
        <button>Submit</button>
      </form>
    </div>

  )
}

const mapStateToProps = (state) => ({
  coins: state.coins
})
const mapDispatchToProps = (dispatch) => ({
  updateCoinInfo: (symbol, amount) => dispatch(getCoinInfo(symbol, amount))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Form);
