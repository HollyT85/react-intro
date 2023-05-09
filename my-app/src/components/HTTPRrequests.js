import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRrequests extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
    }

    render() {
    const posts = this.state.posts
    return (
        <div>
            <h2>
            Posts
            </h2>
            {
                posts.length ? (
                    posts.map()
                ) :(
                    <h4>Loading Posts...</h4>
                )
            }
        </div>
    )
    }
}

export default HTTPRrequests