import React, {useState} from 'react'
import UseEffectCounter from './UseEffectCounter'

function USeEffectCounterContainer() {
    const [display, setDisplay] = useState(true)
    return (
    <div>
        <button onClick={() => {
            setDisplay(!display)
        }}>
            Toggle
        </button>
        {display && <UseEffectCounter />}
    </div>
    )
}

export default USeEffectCounterContainer