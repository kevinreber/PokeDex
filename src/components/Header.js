import React from 'react';
import Pokeball from './Pokeball'

function Header(){
    return (
        <>
            <header>
                <div id='overlay'></div>
                <h1 id="title"> 
                    <Pokeball /> Pokedex  <Pokeball />
                </h1>
                <input id="filter" type="text" placeholder="Type..." />
            </header>
        </>
    )
}

export default Header;