import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

class NotifyTableDelete extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open:true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    deleteStock(number) {
        const url = '/api/Notification/' + number;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
    }


    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                            삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                                선택한 관심 종목이 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteStock(this.props.number)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default NotifyTableDelete;