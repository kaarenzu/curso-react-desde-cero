import React, { Component } from 'react'
import UserGrid from '../Organisms/UserGrid'
import axios from 'axios'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/users')
        .then(res => {
            this.setState({
                users: res.data
            })
        })
    }
    render() {
        const { users } = this.state
        return <UserGrid users = {users} />
    }
}

export default User