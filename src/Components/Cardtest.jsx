import React from 'react'
import { useState } from 'react'

const Cardtest = () => {
    const [like, setLike] = useState(0)
    const [bg, setBg] = useState("lightblue")
    return (
        <div className='box' >
            <div className='item' style={{ background: bg }}>
                <h1>Post</h1>
                <p>Bu Oddiy Post</p>
                <div>
                    <button className='btn' onClick={() => { setLike(like + 1) }}>Likelar Soni {like}</button>
                    <button className='btn' onClick={() => { setBg(bg === "lightblue" ? "lightgreen" : "lightblue") }}>Change Collor</button>
                </div>
            </div>
        </div>
    )
}

export default Cardtest