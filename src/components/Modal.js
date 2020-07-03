import React from 'react';

function Modal(props){
    /** need to make a duplicate of 'props.stats' b/c state can't be manipulated as a 'const' */
    let stats; 
    if(props.stats){
       stats = props.stats.map(stat => (
            <span className="modal-stat">{stat.name[0].toUpperCase() + stat.name.slice(1)}: {stat.base} </span>
        ));
    }

    return (
        <>
            <div onClick={props.toggleModal} className="modal-overlay">
                <div className="modal-cycle-container">
                    <div onClick={props.navigateModal} data-nav="prev" className="modal-button modal-prev">
                        <span data-nav="prev"> &#60; </span>
                    </div>
                </div>
                <div className="modal-card">
                    <div className="modal-images">
                        <img className="card-image" src={props.image} alt="{props.name}"/>
                        <img className="card-image" src={props.shiny} alt="{props.name}"/>
                    </div>
                    <div className="modal-text">
                        <h2 className="card-title modal-title"> {props.id}.{props.name} </h2> 
                        <p className="card-subtitle modal-text">Type: {props.type}</p>
                        <p className="card-subtitle modal-text">Abilities: {props.abilities}</p>
                        <p className="card-subtitle modal-text modal-stats">{stats}</p>
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