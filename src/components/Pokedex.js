import React from 'react';
import useAxios from '../hooks/useAxios';
import Card from './Card';

function Pokedex(){
    const [pokemon, errors, isLoading] = useAxios(1,5);
    // const [modal, setModal] = useState(false);

    /** return error screen if error has ocurred */
    if (errors){
        return (<h3 id="Loading" >Sorry, an error has occured!</h3>)
    }

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
        </ol>
        </div>
    )
}

export default Pokedex;