import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import NotifyTableDelete from '../pages/NotifyTableDelete';

class NotifyTable extends React.Component {
    
   render() {
        return(
            <TableRow>
                <TableCell>{this.props.number}</TableCell>
                <TableCell>{this.props.stockName}</TableCell>
                <TableCell>{this.props.price}</TableCell>
                <TableCell><NotifyTableDelete stateRefresh={this.stateRefresh} number={this.props.number}/></TableCell>
            </TableRow>
            );
        }
}

export default NotifyTable;