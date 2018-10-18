import React, {Component} from 'react';

class Form extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    const coin = e.target.elements.coin.value;
    const owned = e.target.elements.owned.checked;

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

export default Form;
