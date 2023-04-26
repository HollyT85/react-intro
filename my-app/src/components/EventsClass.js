import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("Clackety-Clack")
    }
    render() {
    return (
        <div>
            <button onClick={this.clickHandler}>Click Me - Class</button>
        </div>
    )
    }
}

export default EventsClass