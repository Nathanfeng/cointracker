import React, {Component} from 'react';
import {connect} from 'react-redux';

class AssetList extends Component {
  render() {
    console.log(this.props.coins.map((el) => <p>{el.price}</p>))
    return(
      <div>
        <h3>Here is the list of assets</h3>
      {this.props.coins.map((el, index) => <p key={index}>symbol:{el.symbol} current price ${el.price}</p>)}
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
