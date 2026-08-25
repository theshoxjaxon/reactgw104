import React from 'react'
import { useEffect, useState } from 'react'


const User = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch Data
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.log("Sizdagi xatolik 🔥: ", error)
                return 0
            }

        }

        // Loading
        const time = setTimeout(() => {
            setLoading(false)
        }, 2000)

        // Functions
        // clearTimeout(time)
        fetchData()


    }, [])

    const delteUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })
            .then(() => {

                setPosts(posts.filter(p => p.id !== id));
            });

    }




    return (
        <div>
            {loading ? (
                <span className="loading loading-spinner loading-xl flex justify-center text-center items-center"></span>
            ) : (
                <div className="w-full min-h-screen bg-[#111827] flex flex-col items-center p-6">
                    <h1 className="text-white text-2xl font-semibold mb-6">Users</h1>
                    <div className="w-full max-w-2xl flex flex-col gap-4">
                        {posts.map((user) => (
                            <ul onClick={() => delteUser(user.id)} key={user.id} className="w-full bg-[#1f2937] border border-gray-800 rounded-xl p-4 shadow-md">
                                <li className="text-white font-medium">{user.name}</li>
                                <li className="text-gray-400 text-sm mt-0.5">{user.email}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default User