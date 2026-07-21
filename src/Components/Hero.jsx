import React from 'react'
import Button from './Button'
const Hero = () => {
    return (
        <div>
            <section>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis reprehenderit perspiciatis repudiandae ipsum architecto tempora nam tenetur explicabo pariatur! Itaque tempore libero quo et rem illo molestias quos? Sapiente.</p>
                    <Button />
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQlsd_6KGJ4baYxkj1obOHaQTbnr5KKEes3Fgazx8db_Q4-ZtIxc0eYMP&s=10" alt="Leo Messi" width={800} height={600} />
            </section>
        </div>
    )
}

export default Hero