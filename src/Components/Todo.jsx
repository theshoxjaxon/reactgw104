import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaPlusCircle } from "react-icons/fa";

const Todo = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form action="/" className='w-full h-screen flex justify-center items-center text-center ' onSubmit={handleSubmit(onSubmit)} >
                <input {...register("task")} type="text" placeholder='Add Your Items' className='border border-white rounded-2xl p-2' />
                <button className='border border-white p-3 rounded-3xl mx-[-2px]'><FaPlusCircle /></button>
            </form>
        </div>
    )
}

export default Todo