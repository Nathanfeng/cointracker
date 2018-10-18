import React, {Component} from 'react';
import store from '../../store'

class AssetList extends Component {
  render() {
    return(
      <div>
        <h3>Here is the list of assets</h3>
        {/* <p>{store.getState()[0].symbol}</p> */}
      </div>
    )
  }
}

export default AssetList;
