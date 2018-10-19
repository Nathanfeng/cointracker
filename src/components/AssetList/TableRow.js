import React from 'react';

const TableRow = (props) => {
  const value = Math.round(props.price * props.amount * 100)/100 ;
  return (
    <tr>
      <td>{props.symbol}</td>
      <td>{props.price}</td>
      <td>{props.amount}</td>
    <td>{value}</td>
    </tr>
  )
}

export default TableRow;
