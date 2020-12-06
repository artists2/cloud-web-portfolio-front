import React, { Component } from 'react';

class NotifyTableDelete extends Component{

    deleteStock(number) {
        const url = '/api/notification' + number;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e)=>{this.deleteStock(this.props.number)}}>삭제</button>
        )
    }
}


export default NotifyTableDelete;