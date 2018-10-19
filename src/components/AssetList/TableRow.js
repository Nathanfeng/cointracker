import React from 'react';
import {connect} from 'react-redux';
import {deleteCoin} from './assetListActions';


const TableRow = (props) => {
  const value = Math.round(props.price * props.amount * 100)/100 ;

  const onDelete = () => {
    debugger
    props.deleteCoin(props.symbol);
  }

  return (
    <tr>
      <td>{props.symbol}</td>
      <td>{props.price}</td>
      <td>{props.amount}</td>
      <td>{value}</td>
      <td>
        <button
          onClick={onDelete()}
        >
          Delete
        </button></td>
    </tr>
  )
}


const mapDispatchToProps = (dispatch) => ({
    deleteCoin: (symbol) => dispatch(deleteCoin(symbol))
})

export default connect(
  undefined,
  mapDispatchToProps
)(TableRow);
