import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'


const Products = () => {
    const [data, setData] = useState([])
    const { register, watch, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {
        const productsData = fetch("https://fakestoreapi.com/products")
            .then((res) => res.json()) // Don't forget to return this!
            .then((data) => {
                setData(data)
            })
    }, [])
    const onSubmit = (e) => {
        console.log(e)
    }

    return (
        <div>
            <form action="/" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("xoshim")} />

            </form>

        </div>
    )
}

export default Products