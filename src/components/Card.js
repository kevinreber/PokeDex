import React from 'react';

function Card(props){
    return (
        <>
        <li id={props.id} className="card" onClick={props.toggleModal}>
            <img className="card-image" src={props.image} alt={props.name} />
            <h2 className="card-title"> {props.id}.{props.name} </h2>
            <p className="card-subtitle">Type: {props.type}</p> 
        </li>
        </>
    )
}

export default Card;