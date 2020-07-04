import React, {useState, useEffect} from 'react';
import useAxios from '../hooks/useAxios';
import Card from './Card';
import Modal from './Modal';

function Pokedex(){
    // State to store pokemon
    const [pokemon, errors, isLoading] = useAxios(1,150);
    // State to display Modal
    const [modalShow, setModalShow] = useState(false);
    // State to display which Pokemon on Modal
    const [pokeModal, setPokeModal] = useState(null);
    // State to filter pokemon type
    const[search, setSearch] = useState('');
    const [searchPoke, setSearchPoke] = useState([]);

    /** updates state of search field */
    const handleChange = (e) =>{
        setSearch(e.target.value);
    }

    /** if user is making search, update 'searchPoke' to display matched pokemon types */
    useEffect(() =>{        
        const results = pokemon.filter(p => p.type.toLowerCase().includes(search));        
        setSearchPoke(results);
    },[search, setSearch])


    /** Toggle's modal and get's card's 'id' for 'pokModal' */
    const toggleModal = (e) => {

        /** Should only be able to toggle Modal if clicking outside of 
         * Modal when Modal is open or when Modal is closed */
        if(e.target.className === 'modal-overlay' || !modalShow){
            setModalShow( m => m = !m);

            /** reset pokeModal */
            if(modalShow){
                setPokeModal(null);
            } else {
                /** set 'pokeModal' id to display in Modal */
                const parent = e.target.closest('li');        
                setPokeModal(parent.id - 1);
            }
        }
    }

    /** Define 'navigateModal' as a 'function' b/c using 'const' will give us errors when re-using 'navigateModal' */
    function navigateModal(e) {
        /** handle 'previous' pokemon 'pokeModal' */
        if (e.target.dataset.nav === 'prev'){
            let prev = pokeModal - 1 === -1 ? pokemon.length - 1 : pokeModal - 1;
            setPokeModal(prev);
        }
        /** handle 'next' pokemon 'pokeModal' */
        if (e.target.dataset.nav === 'next'){
            let next = pokeModal + 1 === pokemon.length ? 0 : pokeModal + 1;
            setPokeModal(next);
        }                
    }

    /** return error screen if error has ocurred */
    if (errors){
        return (<h3 id="Loading" >Sorry, an error has occurred!</h3>)
    }

    /** will use 'display' to determine to show filtered search or all pokemon */
    let display = searchPoke.length !== 0 ? searchPoke : pokemon;

    /** build Card component for pokemon */
    const pokemons = display.map(p => (
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
        <input 
            id="filter" 
            type="text" 
            placeholder="Pokemon Types..." 
            value={search}
            onChange={handleChange}
        />
        <div id="overlay" 
            className={modalShow ? "show" : "hide"}>
            <Modal 
                {...pokemon[pokeModal]} 
                navigateModal={navigateModal} 
                toggleModal = {toggleModal}
        />
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