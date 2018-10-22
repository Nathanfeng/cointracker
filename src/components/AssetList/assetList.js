import React from 'react';
import {connect} from 'react-redux';
import Row from './Row';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const AssetList = (props) => {
  const renderRows = () => {
    return props.coins.map((coin, i) => {
      return <Row
        key={i}
        symbol={coin.symbol}
        price={coin.price}
        amount={coin.amount}
      />
    })
  }

  return(
    props.coins.length > 0 && (
      <div>
        <h3>Assets Owned:</h3>
        <Paper>
          <Table width='100px'>
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell numeric>Current Price</TableCell>
                <TableCell numeric>Amount Owned</TableCell>
                <TableCell numeric>Value in USD</TableCell>
              <TableCell >Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderRows()}
            </TableBody>
          </Table>
        </Paper>
{/*
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
            {renderRows()}
          </tbody>
        </table> */}

      </div>
    )
  )

}

const mapStateToProps = (state) => {
  return {
    coins: state.coins
  }
}
export default connect(mapStateToProps)(AssetList);
