import React, { Component } from 'react';
import TotalValue from './components/totalValue.js';
import Form from './components/Form/form.js';
import AssetList from './components/AssetList/assetList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>CoinTracker</h2>
      <TotalValue/>
      <AssetList/>
      <Form/>
      </div>
    );
  }
}

export default App;
