import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCoinInfo} from './formActions';

class Form extends Component {

  onSubmit = async (e) => {
    e.preventDefault();
    const coin = e.target.elements.coin.value;
    const owned = e.target.elements.owned.checked;
    this.props.getCoinInfo(coin, owned);
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
          />
        <input type="checkbox" name='owned'/> I hold this coin
          <button>Submit</button>
        </form>
      </div>

    )
  }
}

const mapDispatchToProps = (state) => ({
  coins: state.coins
})
const mapStateToProps = (dispatch) => ({
  getCoinInfo: (symbol, owned) => dispatch(getCoinInfo(symbol, owned))
})

export default connect ({
  mapDispatchToProps,
  mapStateToProps
})(Form);
