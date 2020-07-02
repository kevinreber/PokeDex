import React, {useState, useEffect} from 'react';
import useAxios from '../hooks/useAxios';
import axios from 'axios';
import Card from './Card';

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function Pokedex(){
    const [pokemon, errors, isLoading] = useAxios(1,5);
    // const [modal, setModal] = useState(false);



    const pokemons = pokemon.map(p => (
        <Card
            // key = {p.id}
            // id = {p.id}
            // name = {p.name} 
            // image = {p.image}
            // type = {p.type}
            {...p}
        />
    ));

    return (
        <div className="Pokedex">
        <ol id="pokedex">
            { isLoading ? (<h3 id="Loading" >Loading...</h3>) : pokemons }

            {/* { pokemon ? pokemons : (<h3>Loading...</h3>) } */}
            {/* {pokemons} */}
        </ol>
        </div>
    )
}

export default Pokedex;