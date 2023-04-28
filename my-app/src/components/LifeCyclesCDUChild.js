import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log('child constructor called')
        super(props)
    
        this.state = {
            greeting: 'Boo'
        }
    }

    updateGreeting = () => {
        console.log('child update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Boo' ? 'Ghost' : 'Boo'
            }
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('child component updated')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting){
            console.log('Parent greeting changed')
        }
    }

    render() {
        console.log('child render called')
    return (
        <div>
            <h1>
                {this.state.greeting}
            </h1>
            <button onClick={this.updateGreeting}>
                Update Greeting
            </button>
        </div>
    )
    }
}

export default LifeCyclesCDUChild