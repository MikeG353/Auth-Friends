import React from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth"

import Friend from '../components/Friend'
import FriendForm from '../components/FriendForm'

class FriendsList extends React.Component {
    state = {
        friend: {},
        friends: []
    }

    componentDidMount() {
        this.getFriends()
    }

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    getFriends = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    addFriend = e => {
        e.preventDefault();
        console.log(this.state.friend)
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", this.state.friend)
            .then(res => {
                console.log(res)
                this.setState({
                    friends: res.data
                })
                console.log(this.state)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    render(){
    return (
        <>
            <div>
                <form onSubmit={this.addFriend}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="age"
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="email"
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.handleChanges}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
            {
                this.state.friends.map(friend => {
                    return <Friend friend={friend} key={friend.id} />
                })
            }
        </>
    )}
}

export default FriendsList