import React from 'react'

const Card = (props) => {
    return (
        <div className='card' style={{ backgroundColor: props.cardBg }} >
            <img src={props.img} width={300} height={200} />
            <h1>{props.head}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident deserunt harum velit! Ipsam, explicabo voluptatem autem alias minus exercitationem quia maiores excepturi odio adipisci sunt quae iusto! Illo, saepe.</p>
            <button className='btn' style={{ backgroundColor: props.btnBg }}>Sign Up</button>
        </div>
    )
}

export default Card