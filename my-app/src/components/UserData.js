import React from 'react'

function UserData(props) {
    return (
    <div>
        <h1>{props.isLoaded ? 'Loaded' : 'Failure'}</h1>
    </div>
    )
}

export default UserData