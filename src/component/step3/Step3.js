import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Step3 extends Component {
    constructor() {
        super()
        this.state = {
            monthlyMortgageAmount: '',
            desiredMortgageAmount: ''
        }
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    // addHome() {
    //     let promise = axios.post('/api/home', {...this.state})
    //     promise.then((res) => {
    //         this.setState({
    //             name: '',
    //             address: '',
    //             city: '',
    //             state: '',
    //             zipCode: '',
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <h2>Monthly Mortgage Amount</h2>
                <input value={this.state.name} name='monthlyMortgageAmount' onChange={event => this.handleInputChange(event)} />
                <h2>Desired Monthly Rent</h2>
                <input value={this.state.address} name='desiredMonthlyRent' onChange={event => this.handleInputChange(event)} />
                
                <Link to='/wizard/step2'><button onClick={() => this.addHome()} >Next Step</button></Link>
            </div>
        )
    }
}

export default Step3