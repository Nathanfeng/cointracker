import React from 'react';
import {connect} from 'react-redux';

const TotalValue = (props) => {
  let totalPortfolioValue;
  let coinAccum;
  if(props.coins.length >0){
    coinAccum = props.coins.map((coin) => {
      return coin.price * coin.amount
    })
    console.log(coinAccum);
    totalPortfolioValue = coinAccum.reduce((accum, el) => accum + el);
    totalPortfolioValue = Math.round(totalPortfolioValue * 100)/100
  } else {
    totalPortfolioValue = 0;
  }
  return (
    <div>
      <h3>The total value of your portfolio is ${totalPortfolioValue.toLocaleString('en')} USD</h3>
    </div>
  )
}


const mapStateToProps = (state) => {
  return ({
    coins: state.coins
  })
}

export default connect(
  mapStateToProps
)(TotalValue);
