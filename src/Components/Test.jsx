import React from 'react'
import { useState } from 'react'

const Test = () => {
    const salomBer = () => {
        console.log("Salom")
    }
    const keyboard = (event) => {
        console.log(event.key)

    }
    return (
        <div>
            <button onClick={salomBer}>Salom</button>
            <input type="text" onKeyDown={keyboard} />

        </div>
    )
}

export default Test