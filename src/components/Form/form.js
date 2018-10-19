import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCoinInfo} from './formActions';

class Form extends Component {

  onSubmit = async (e) => {
    e.preventDefault();
    const coin = e.target.elements.coin.value;
    const amount = e.target.elements.amount.value;
    if (amount < 0){
      alert('cant have negative amount owned')
    } else {
      this.props.updateCoinInfo(coin, amount);
    }
    e.target.elements.coin.value = '';
    e.target.elements.amount.value = '';
  }

  render() {
    return(
      <div>
        <h3>Enter the Symbol for the Coins you want to track</h3>
        <form onSubmit={this.onSubmit}>
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
