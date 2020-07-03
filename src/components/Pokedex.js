import React, {useState,useEffect} from 'react';
import useAxios from '../hooks/useAxios';
import Card from './Card';
import Modal from './Modal';

function Pokedex(){
    const [pokemon, errors, isLoading] = useAxios(1,5);
    const [modalShow, setModalShow] = useState(false);
    const[pokeModal, setPokeModal] = useState(null);

    /** Toggle's modal and get's card's 'id' for 'pokModal' */
    const toggleModal = (e) => {
        setModalShow( m => m = !m);

        /** reset pokeModal */
        if(modalShow){
            setPokeModal(null);
        } else {
            /** set 'pokeModal' id to display in Modal */
            const parent = e.target.closest('li');        
            setPokeModal(pokemon[parent.id - 1]);
        }
    }

    /** return error screen if error has ocurred */
    if (errors){
        return (<h3 id="Loading" >Sorry, an error has occurred!</h3>)
    }

    /** build Card component for pokemon */
    const pokemons = pokemon.map(p => (
        <Card
            key = {p.id}
            id = {p.id}
            name = {p.name} 
            image = {p.image}
            type = {p.type}
            toggleModal = {toggleModal}
        />
    ));

    return (
        <>
        <div id="overlay" 
            className={modalShow ? "show" : "hide"}
            onClick={toggleModal}>
            <Modal {...pokeModal} />
        </div>
        <div className="Pokedex">
        <ol id="pokedex">
            { isLoading ? (<h3 id="Loading" >Loading...</h3>) : pokemons }
        </ol>
        </div>
        </>
    )
}

export default Pokedex;