import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super (props);
        this.state = {
            Name:'',
            birthday:''
        }
    }

    handleFormSubmit = (e) => {
        e.prevenDefault()
        this.addstock()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            Name:'',
            birthday:''
        })
        window.location.reload();
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addstock = () => {
        const url = '/api/notification';
        const formData = new FormData();
        formData.append('name', this.state.stockName);
        formData.append('birthday', this.state.birthday);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h2>관심종목 추가</h2>
                관심종목:<input type="text" name="stockName" value={this.state.stockName} onChange={this.handleValueChange}/><br/>
                생일:<input type='text' name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;


 