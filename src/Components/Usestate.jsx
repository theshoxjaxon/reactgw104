import React from 'react'
import { useState } from 'react'

const Usestate = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")


    return (
        <div>

            {/* Counter */}
            {/* <h1>Counter</h1>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            <p>{count}</p>
            <button onClick={() => { setCount(count - 1) }}>-1</button> */}
            <form action="/" >
                <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            </form>
            <h1>{text || "Type something beloww...."}</h1>
        </div>
    )
}
export default Usestate