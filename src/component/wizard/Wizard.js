import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {

    render() {
        return (
            <div>
                Wizard
                <Link to='/wizard/step1'>Step1</Link>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard;