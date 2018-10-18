import React, {Component} from 'react';

class Form extends Component {

  state = {
    input: '',
  }

  onFieldChange = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.

  }

  render() {
    return(
      <div>
        <h3>Enter the Symbol for the Coins you want to track</h3>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder='Coin Symbol'
            type='text'
            onChange={this.onFieldChange}
          /> <br/>
          <input type="checkbox" value="Bike"/> I hold this coin <br/>
          <button>Submit</button>
        </form>
      </div>

    )
  }
}

export default Form;
