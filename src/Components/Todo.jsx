import React, { useState, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { FaPlusCircle, FaStar, FaRegStar, FaTrash, FaTrashAlt, FaUndo, FaPen, FaCheck, FaTimes } from "react-icons/fa"

const TODOS_KEY = "react_todos"
const DELETED_KEY = "react_todos_deleted"

const loadFromStorage = (key) => {
    const saved = localStorage.getItem(key)
    if (!saved) return []
    try {
        return JSON.parse(saved)
    } catch (err) {
        console.log(`saqlangan ma'lumotni o'qishda xato: ${err}`)
        return []
    }
}

const Todo = () => {
    const [todos, setTodos] = useState(() => loadFromStorage(TODOS_KEY))
    const [deletedTodos, setDeletedTodos] = useState(() => loadFromStorage(DELETED_KEY))
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState("")

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        localStorage.setItem(DELETED_KEY, JSON.stringify(deletedTodos))
    }, [deletedTodos])

    // Yulduzchali vazifalar ro'yxatning yuqorisiga chiqadi
    const sortedTodos = useMemo(
        () => [...todos].sort((a, b) => Number(b.starred) - Number(a.starred)),
        [todos]
    )

    const onSubmit = (data) => {
        const newTodo = {
            id: Date.now(),
            text: data.taskText,
            starred: false,
        }
        setTodos((prev) => [newTodo, ...prev])
        reset()
    }

    const toggleStar = (id) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, starred: !t.starred } : t))
        )
    }

    const deleteTodo = (id) => {
        const target = todos.find((t) => t.id === id)
        if (!target) return
        setTodos((prev) => prev.filter((t) => t.id !== id))
        setDeletedTodos((prev) => [target, ...prev])
    }

    const restoreTodo = (id) => {
        const target = deletedTodos.find((t) => t.id === id)
        if (!target) return
        setDeletedTodos((prev) => prev.filter((t) => t.id !== id))
        setTodos((prev) => [target, ...prev])
    }

    const deleteForever = (id) => {
        setDeletedTodos((prev) => prev.filter((t) => t.id !== id))
    }

    const startEdit = (todo) => {
        setEditingId(todo.id)
        setEditText(todo.text)
    }

    const saveEdit = (id) => {
        const trimmed = editText.trim()
        if (trimmed) {
            setTodos((prev) =>
                prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
            )
        }
        setEditingId(null)
    }

    const cancelEdit = () => {
        setEditingId(null)
    }

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Vazifalar</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-8">
                    <input
                        {...register("taskText", { required: true })}
                        type="text"
                        placeholder="Yangi vazifa qo'shing..."
                        className="input input-bordered w-full"
                    />
                    <button type="submit" className="btn btn-primary btn-circle shrink-0">
                        <FaPlusCircle size={18} />
                    </button>
                </form>

                <div className="space-y-2">
                    {sortedTodos.length === 0 && (
                        <p className="text-center text-base-content/50">Vazifalar yo'q</p>
                    )}

                    {sortedTodos.map((t) => (
                        <div key={t.id} className="card card-compact bg-base-100 shadow-sm">
                            <div className="flex items-center gap-2 p-3">
                                <button
                                    onClick={() => toggleStar(t.id)}
                                    className="btn btn-ghost btn-circle btn-sm shrink-0"
                                >
                                    {t.starred ? <FaStar className="text-warning" /> : <FaRegStar />}
                                </button>

                                {editingId === t.id ? (
                                    <>
                                        <input
                                            autoFocus
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") saveEdit(t.id)
                                                if (e.key === "Escape") cancelEdit()
                                            }}
                                            className="input input-bordered input-sm flex-1"
                                        />
                                        <button
                                            onClick={() => saveEdit(t.id)}
                                            className="btn btn-ghost btn-circle btn-sm shrink-0"
                                        >
                                            <FaCheck className="text-success" />
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="btn btn-ghost btn-circle btn-sm shrink-0"
                                        >
                                            <FaTimes />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <span className="flex-1 break-words">{t.text}</span>
                                        <button
                                            onClick={() => startEdit(t)}
                                            className="btn btn-ghost btn-circle btn-sm shrink-0"
                                        >
                                            <FaPen />
                                        </button>
                                        <button
                                            onClick={() => deleteTodo(t.id)}
                                            className="btn btn-ghost btn-circle btn-sm shrink-0"
                                        >
                                            <FaTrash className="text-error" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {deletedTodos.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-lg font-semibold text-center mb-3 text-base-content/70">
                            O'chirilganlar
                        </h2>
                        <div className="space-y-2">
                            {deletedTodos.map((t) => (
                                <div key={t.id} className="card card-compact bg-base-100/60 shadow-sm">
                                    <div className="flex items-center gap-2 p-3">
                                        <span className="flex-1 break-words line-through text-base-content/50">
                                            {t.text}
                                        </span>
                                        <button
                                            onClick={() => restoreTodo(t.id)}
                                            title="Qaytarish"
                                            className="btn btn-ghost btn-circle btn-sm shrink-0"
                                        >
                                            <FaUndo />
                                        </button>
                                        <button
                                            onClick={() => deleteForever(t.id)}
                                            title="Butunlay o'chirish"
                                            className="btn btn-ghost btn-circle btn-sm shrink-0"
                                        >
                                            <FaTrashAlt className="text-error" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Todo
