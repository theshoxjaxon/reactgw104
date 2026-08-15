import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegHeart } from "react-icons/fa6";

const Loading = () => {

    //theshoxjaxon

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState("")

    const onSubmit = (data) => {
        const newProduct = {
            id: crypto.randomUUID(), // Generates a secure unique ID (UUID v4)
            ...data
        }

        setProduct(newProduct)
        console.log(newProduct)

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)



        return () => clearTimeout(timer)
    }, [])

    return (

        <>
            <div className='w-full h-screen flex items-center justify-center'>
                {loading ? <h1 className='text-2xl font-bold w-full items-center text-center justify-center h-screen'>Loading...</h1> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("productName")} type="text" placeholder='Enter product name' className='border border-black p-2 rounded-lg' />
                        <input {...register("productURL")} type="text" placeholder='Enter product image URL' className='border border-black p-2 rounded-lg' />
                        <input {...register("productPrice")} type="text" placeholder='Enter product price' className='border border-black p-2 rounded-lg' />

                        <button className='border border-white p-5'>Submit</button>
                    </form>}



            </div>

            <div className='border border-white p-4 text-center'>
                <img src={product.productURL} alt={product.productName} />
                <h2> {product.productName} </h2>
                <p> <b>{product.productPrice}</b> </p>

                <button className='border border-white p-3' onClick={() => { setProduct(null) }}>Delete</button>
                <button><FaRegHeart /></button>
            </div>

        </>




    )
}

export default Loading