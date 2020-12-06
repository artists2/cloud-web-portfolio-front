import React from 'react';
import NotifyTableAdd from './NotifyTableAdd';
import NotifyTable from './NotifyTable';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Notify extends React.Component {

    state = {
        stockadd: ""
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({stockadd: res}))
        .catch(err => console.log(err));
    }

    callApi = async() => {
        const response = await fetch('/api/stockadd');
        const body = await response.json();
        return body;
    }
    
   render() {
        return(
            <div>
                {<Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>구분</TableCell>
                            <TableCell>종목</TableCell>
                            <TableCell>가격</TableCell>
                            <TableCell>설정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.stockadd ? this.state.stockadd.map(c=>{ 
                        return(<NotifyTable stateRefresh={this.stateRefresh} key={c.number} number={c.number} stockName={c.stockName} price={c.price}/>);
                    }) : ""}
                    </TableBody>
                </Table>}
                <NotifyTableAdd/>
            </div>
            );
        }
}

export default Notify;
