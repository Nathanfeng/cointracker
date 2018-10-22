import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCoinInfo} from './formActions';
import { withStyles } from '@material-ui/core/styles';
import MaterialUIForm from 'react-material-ui-form';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import RaisedButton from 'material-ui/RaisedButton';


// const Form = (props) => {

class Form extends Component {
  // state = {
  //   symbol: '',
  //   amount: ''
  // }
  //
  // handleCoinChange = (event) => {
  //   this.setState({
  //     symbol: event
  //   });
  //   debugger
  // }
  //
  // handleAmountChange = (event) => {
  //   this.setState({
  //     amount: event
  //   });
  // }

  includeCoin = (coinType) => {
    let coinArray = this.props.coins;
    for(let i =0; i< coinArray.length; i++) {
      if (coinArray[i].symbol === coinType) {
        return true;
      }
    }
    return false;
  }

  onSubmit = (e) => {

    let coin = this.refs.coin.props.value;
    let amount = this.refs.amount.props.value;
    // let coin = this.state.coin;
    // let amount = this.state.coin;
    console.log(coin, amount)
    if (amount < 0){
      alert('cant have negative amount owned');
    } else if(this.includeCoin(coin)) {
      alert('you already entered that coin');
    } else {
      this.props.updateCoinInfo(coin, amount);
    }
    // this.setState({
    //   symbol: "",
    //   amount: ""
    // })
  }

  render(){

    return (
      <div>
        <h3>Enter the symbol for the coins you want to track</h3>

      {/* <form onSubmit={onSubmit}> */}
      <MaterialUIForm onSubmit={this.onSubmit}>

        <TextField
          name='name'
          value=''
          ref='coin'
          label="Coin Symbol"
          type='text'
          margin="normal"
          variant="filled"
          onChange={this.handleCoinChange}
        /> <br/>
        <TextField
          name='amt'
          value=''
          ref='amount'
          type='number'
          label="Amount"
          margin="normal"
          variant="filled"
          onChange={this.handleAmountChange}
        /> <br/>
        <Button variant='raised' type="submit">Submit</Button>
    </MaterialUIForm>
    {/* <input
      placeholder='Coin Symbol ie. BTC'
      type='text'
      name='coin'
      /> <br/>
      <input type="number" name='amount' step='any' placeholder='amount owned ie. 0.5'/> <br/>
      <button>Submit</button>
      </form> */}

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
