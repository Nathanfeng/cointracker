import React from 'react';
import {connect} from 'react-redux';

const TotalValue = (props) => {
  let totalPortfolioValue;
  let coinPrices;
  if(props.coins.length >0){
    coinPrices = props.coins.map((coin) => coin.price)
    totalPortfolioValue = coinPrices.reduce((accum, el) => accum + el);
    totalPortfolioValue = Math.round(totalPortfolioValue * 100)/100
  }
  console.log(totalPortfolioValue);
  return (
    <div>
      <h3>The total value of your portfolio is ${totalPortfolioValue} USD</h3>
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
