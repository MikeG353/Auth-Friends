import React from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth"

import Friend from '../components/Friend'
import FriendForm from '../components/FriendForm'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getFriends()
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

    render(){
    return (
        <>
            <FriendForm />
            {
                this.state.friends.map(friend => {
                    return <Friend friend={friend} key={friend.id} />
                })
            }
        </>
    )}
}

export default FriendsList