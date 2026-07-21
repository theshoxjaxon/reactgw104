import React from 'react'

const Robot = (props) => {
    // {props : name="", color:""}
    console.log(props)
    return (
        <div style={{ backgroundColor: props.bgFon }}>
            <h1 style={{ color: props.color }}>Salom Mening Ismim : {props.name} </h1>
        </div>
    )
}

export default Robot