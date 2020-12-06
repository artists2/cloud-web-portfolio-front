import React from 'react';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogAction from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { DialogContentText } from '@material-ui/core';

const style = theme => ({
    hidden: {
        display: 'none'
    }
})

class NotifyTableAdd extends React.Component {

    constructor(props) {
        super (props);
        this.state = {
            Name:'',
            price:'',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addstock()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            stockName:'',
            price:'',
            open: false
        })
        window.location.reload();
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickOpen = () => {
        this.setState({
            open:true
        })
    }

    handleClose = () => {
        this.setState({
            stockName:'',
            price:'',
            open: false
        })
    }

    addstock = () => {
        const url = '/api/notification';
        const formData = new FormData();
        formData.append('name', this.state.stockName);
        formData.append('price', this.state.price);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        const { classes } = this.props; 
        return (
            <div>
                <Button variant="contained" color="primary" type="submit" onClick={this.handleClickOpen}>
                     관심종목 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>종목 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="종목 이름" type="text" name="stockName" value={this.state.stockName} onChange={this.handleValueChange}/><br/>
                        <TextField label="원하는 가격" type="text" name="price" value={this.state.price} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogAction>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogAction>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(style)(NotifyTableAdd);