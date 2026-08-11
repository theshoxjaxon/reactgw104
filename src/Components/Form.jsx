import React from 'react'
import { useState } from 'react'


const Form = () => {
    const [search, setSearch] = useState("")
    const [index, setIndex] = useState("")
    const [path, setPath] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Search:", search)
        console.log("Index:", index)
        console.log("Path:", path)

    }
    return (
        <form onSubmit={handleSubmit}>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
            </label>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </g>
                </svg>
                <input type="text" className="grow" placeholder="index.php" value={index} onChange={(e) => setIndex(e.target.value)} />
            </label>
            <label className="input">
                Path
                <input type="text" className="grow" placeholder="src/app/" value={path} onChange={(e) => setPath(e.target.value)} />
                <span className="badge badge-neutral badge-xs">Optional</span>
            </label>


            <button className="btn btn-wide">Wide</button>
        </form>
    )
}

export default Form