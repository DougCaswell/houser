import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Step1 extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
        }
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    addHome() {
        let promise = axios.post('/api/home', {...this.state})
        promise.then((res) => {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Name</h2>
                <input value={this.state.name} name='name' onChange={event => this.handleInputChange(event)} />
                <h2>Address</h2>
                <input value={this.state.address} name='address' onChange={event => this.handleInputChange(event)} />
                <h2>City</h2>
                <input value={this.state.city} name='city' onChange={event => this.handleInputChange(event)} />
                <h2>State</h2>
                <input value={this.state.state} name='state' onChange={event => this.handleInputChange(event)} />
                <h2>Zip Code</h2>
                <input type='number' value={this.state.zipCode} name='zipCode' onChange={event => this.handleInputChange(event)} />
                <Link to='/wizard/step2'><button onClick={() => this.addHome()} >Next Step</button></Link>
            </div>
        )
    }
}

export default Step1