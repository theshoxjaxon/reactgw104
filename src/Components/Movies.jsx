import React from 'react'

let movies = [
    {
        id: 1,
        img: "https://picsum.photos/200/200",
        title: "Spider Man",
        genre: "Action/Fantastic"
    },
    {
        id: 2,
        img: "https://picsum.photos/200/200",
        title: "Forest Gump",
        genre: "Action"
    },
    {
        id: 3,
        img: "https://picsum.photos/200/200",
        title: "Spider Man",
        genre: "Action/Fantastic"
    },
    {
        id: 4,
        img: "https://picsum.photos/200/200",
        title: "Spider Man",
        genre: "Action/Fantastic"
    },
    {
        id: 5,
        img: "https://picsum.photos/200/200",
        title: "Spider Man",
        genre: "Action/Fantastic"
    },
]


const Movies = () => {
    return (
        <div className='flex  gap-5 justify-center items-center w-full h-[100vh]'>
            {movies.map((movie) => (

                <div onClick={(e) => { alert(movie.title) }} key={movie.id} className='text-center border border-black p-3'>
                    <img src={movie.img} alt="Movie Img" />
                    <h1>{movie.title}</h1>
                    <p>{movie.genre}</p>
                </div>
            ))}

        </div>
    )
}

export default Movies