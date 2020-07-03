import React from 'react';

function Modal(props){
    return (
        <>
            <div onClick={props.toggleModal} className="modal-overlay">
                <div className="modal-cycle-container">
                    <div onClick={props.navigateModal} data-nav="prev" className="modal-button modal-prev">
                        <span data-nav="prev"> &#60; </span>
                    </div>
                </div>
                <div className="modal-card">
                    <svg onClick={props.toggleModal} className="modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/> 
                    </svg>
                    <div className="modal-images">
                        <img className="card-image" src={props.image} alt="{props.name}"/>
                        <img className="card-image" src={props.shiny} alt="{props.name}"/>
                    </div>
                    <div className="modal-text">
                        <h2 className="card-title modal-title"> {props.id}.{props.name} </h2> 
                        <p className="card-subtitle modal-text">Type: {props.type}</p>
                        <p className="card-subtitle modal-text">Abilities: {props.abilities}</p>
                    </div> 
                </div>
                <div className="modal-cycle-container">
                    <div onClick={props.navigateModal} data-nav="next" className="modal-button modal-next">
                        <span data-nav="next"> &#62; </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;