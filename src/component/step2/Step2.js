import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Step2 extends Component {
    constructor() {
        super()
        this.state = {
            imgUrl: ''
        }
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    // addHome() {
    //     let promise = axios.post('/api/home', {...this.state})
    //     promise.then((res) => {
    //         this.setState({
    //             imgUrl: ''
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <h2>Image URL</h2>
                <input value={this.state.name} name='imgUrl' onChange={event => this.handleInputChange(event)} />
                <Link to='/wizard/step1'><button>Previous Step</button></Link>
                <Link to='/wizard/step3'><button onClick={() => this.addHome()} >Next Step</button></Link>
            </div>
        )
    }
}

export default Step2