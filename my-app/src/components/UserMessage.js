import React from 'react'

function UserMessage(props) {
    return (
    <div>
        {props.isLoggedIn ? (
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

export default UserMessage