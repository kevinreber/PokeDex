import React from 'react';
import pokeball from './pokeball.png';

function Pokeball(){
    return ( 
        <img className="rotate" src={pokeball} alt="pokeball" /> 
    );
}

export default Pokeball;