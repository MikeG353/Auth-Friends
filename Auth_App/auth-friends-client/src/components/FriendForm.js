import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

class FriendForm extends React.Component {
    // Friend form state
    state = {
        friend: { 
            id: undefined,
            name: "",
            age: "",
            email: ""
         }
    };
    // handler for typing in form
    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }
    // add friend function
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

    render() {
        return (
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
        )
    }
}

export default FriendForm