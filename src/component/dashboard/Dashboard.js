import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../house/House';
import axios from 'axios';

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            list: []
        }
        this.removeHome = this.removeHome.bind(this)
    }

    componentDidMount() {
        let promise = axios.get('/api/home')
        promise.then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    removeHome(id) {
        let promise = axios.delete('/api/home/' + id)
        promise.then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    render() {
        let mappedList = this.state.list.map(house => {
            return <House house={house} key={house.id} remove={this.removeHome} />
        })
        return (
            <div>
                Dashboard
                {mappedList}
                <Link to='/Wizard' ><button>Add New Property</button></Link>
            </div >
        )
    }
}

export default Dashboard;