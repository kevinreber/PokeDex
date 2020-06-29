import React from 'react';

function Card({id, name, image, type}){

    return (
        <>
        <li id={id} className="card">
            <img className="card-image" src={image} alt={name} />
            <h2 className="card-title"> {id}.{name} </h2>
            <p className="card-subtitle">Type: {type}</p> 
        </li>
        </>
    )
}

export default Card;