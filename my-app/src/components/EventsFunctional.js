import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("Clickety-Click")
    }
    return (
    <div>
        <button onClick={clickHandler}>Click Me - Functional</button>
    </div>
    )
}

export default EventsFunctional