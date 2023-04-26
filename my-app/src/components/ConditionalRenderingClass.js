import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        }
    }
    render() {
    return (
        <div>
            <h1>{this.state.isLoaded ? 'Loaded' : 'Failure'}</h1>
            {this.state.isLoggedIn ? (
                <div>
                    <p>Hello. You're here.</p>
                    <ol>
                        <li>Remember to Breathe</li>
                        <li>Check Your Eyes Are Open</li>
                        <li>Lick Your Nose</li>
                    </ol>
                </div>
            ) : (
                <p>Please Go Away</p>
            ) }
        </div>
    )
    }
}

export default ConditionalRenderingClass