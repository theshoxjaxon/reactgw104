import React from 'react'

let users = [
    {
        id: 1,
        name: "Begzod",
        age: 14
    },
    {
        id: 2,
        name: "Muhammadayub",
        age: 14
    },
    {
        id: 3,
        name: "Baxtiboy",
        age: 12
    },
    {
        id: 4,
        name: "Abdulaziz",
        age: 14
    },
]
const Welcome = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <div> </div> : <h1>Please login</h1>}


        </div >
    )
}

export default Welcome