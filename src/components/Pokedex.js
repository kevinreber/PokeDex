import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function Pokedex(){
    const [pokemon, setPokemon] = useState([]);
    // const [modal, setModal] = useState(false);

    /** get pokemon data from API */
    useEffect(() =>{
        async function getPokemon(){
            try{
                let results = [];

                for (let i = 1; i <= 151; i++) {
                    let resp = await axios.get(`${API_BASE_URL}/${i}`);
                    results.push(resp.data);
                }

                results.map(r => {
                        setPokemon(p => [...p,
                        {
                            name: r.name,
                            id: r.id,
                            image: r.sprites['front_default'],
                            shiny: r.sprites['front_shiny'],
                            type: r.types.map(type => type.type.name).join('/').toUpperCase(),
                            abilities: r.abilities.map(ability => ability.ability.name).join(', ')
                        }
                ])
            });
            } catch (err){
                alert(err);
            }
        }
        
        getPokemon();
    })

    const pokemons = pokemon.map(p => (
        <Card
            key = {p.id}
            id = {p.id}
            name = {p.name} 
            image = {p.image}
            type = {p.type}
        />
    ));

    return (
        <div className="Pokedex">
        <ol id="pokedex">
            { pokemon ? pokemons : (<h3>Loading...</h3>) }
            {/* {pokemons} */}
        </ol>
        </div>
    )
}

export default Pokedex;