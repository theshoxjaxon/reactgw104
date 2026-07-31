import React from 'react'

let foods = [
    {
        id: 1,
        title: "Pizza",
        price: 19.55
    },
    {
        id: 2,
        title: "Burger",
        price: 9.55
    },
    {
        id: 3,
        title: "Kebab",
        price: 3.55
    },
    {
        id: 4,
        title: "KFC",
        price: 10.67
    },
    {
        id: 5,
        title: "Plov",
        price: 9.55
    },
]


const List = () => {
    return (
        <div>
            {foods.map((food) => (
                <div key={food.id} className='w-75 border border-black' >
                    <h1 className='text-4xl text-red-500'> {food.title} </h1>
                    <p> {food.price} </p>
                </div>
            ))}
        </div>
    )
}

export default List