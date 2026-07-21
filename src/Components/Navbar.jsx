import React from 'react'
import Button from './Button'
const Navbar = () => {
    return (
        <div>
            <nav>
                <a href="/">
                    <img src="" alt="" />
                </a>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    )
}

export default Navbar