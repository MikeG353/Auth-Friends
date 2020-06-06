import React from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth"

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getFriends()
    }

    getFriends = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/data")
            .then(res => {
                console.log(res)
                this.setState({
                    friends: res.data.data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    render(){
    return (
        <></>
    )}
}

export default Friends