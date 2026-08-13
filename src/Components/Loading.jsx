import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Product = [
    {
        id: 1,
        title: "Iphone 14 Pro Max",
        price: 1200,
        color: "black",
        img: "https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iPhone-14-Pro-Max-1.jpg"
    },
    {
        id: 2,
        title: "Iphone 14 Pro Max",
        price: 1200,
        color: "black",
        img: "https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iPhone-14-Pro-Max-1.jpg"
    },
    {
        id: 3,
        title: "Iphone 14 Pro Max",
        price: 1200,
        color: "black",
        img: "https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iPhone-14-Pro-Max-1.jpg"
    },
]

const Loading = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)


        return () => clearTimeout(timer)
    }, [])
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            {loading ? <h1 className='text-2xl font-bold w-full items-center text-center justify-center h-screen'>Loading...</h1> :
                <form>
                    <input type="text" placeholder='Enter product name' className='border border-black p-2 rounded-lg' />
                    <input type="text" placeholder='Enter product image URL' className='border border-black p-2 rounded-lg' />
                    <input type="text" placeholder='Enter product price' className='border border-black p-2 rounded-lg' />
                </form>}
        </div>
    )
}

export default Loading