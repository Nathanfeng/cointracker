import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRow from './TableRow';

class AssetList extends Component {

  renderRows = () => {
    return this.props.coins.map((coin, i) => {
      return <TableRow
        key={i}
        symbol={coin.symbol}
        price={coin.price}
        amount={coin.amount}
      />
    })
  }

  render() {
    console.log(this.props.coins.map((el) => <p>{el.price * el.amount}</p>))
    return(
      <div>
        <h3>Assets Owned:</h3>

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Amount Owned</th>
            <th>Value in USD</th>
          </tr>
        </thead>

        <tbody>
          {this.renderRows()}
        </tbody>
      </table>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins
  }
}
export default connect(mapStateToProps)(AssetList);
