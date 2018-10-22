import React from 'react';
import {connect} from 'react-redux';
import {deleteCoin} from './assetListActions';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const Row = (props) => {
  const value = Math.round(props.price * props.amount * 100)/100 ;

  const onDelete = () => {
    props.deleteCoin(props.symbol);
  }

  return (
    <TableRow key={props.i}>
      <TableCell>{props.symbol}</TableCell>
      <TableCell numeric>{props.price.toLocaleString('en')}</TableCell>
      <TableCell numeric>{props.amount.toLocaleString('en')}</TableCell>
      <TableCell numeric>{value.toLocaleString('en')}</TableCell>
      <TableCell>
        <Button variant="contained" color="secondary" onClick={onDelete} >
          Delete
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>

  )
}




const mapDispatchToProps = (dispatch) => ({
    deleteCoin: (symbol) => dispatch(deleteCoin(symbol))
})

export default connect(
  undefined,
  mapDispatchToProps
)(Row);
