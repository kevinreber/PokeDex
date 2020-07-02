import {useState, useEffect} from 'react';
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function useAxios(start=1,end=150){
    const [responses, setResponse] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    /** get pokemon data from API */
    useEffect(() => {
        const getData = async () =>{
            try{
                let results = [];
        
                for (let i = start; i <= end; i++) {
                    let resp = await axios.get(`${BASE_URL}/${i}`);
                    results.push(resp.data);
                }
                    
                results.map(r => {
                        setResponse(p => [...p,
                        {
                            name: r.name,
                            id: r.id,
                            image: r.sprites['front_default'],
                            shiny: r.sprites['front_shiny'],
                            type: r.types.map(type => type.type.name).join('/').toUpperCase(),
                            abilities: r.abilities.map(ability => ability.ability.name).join(', ')
                        }
                    ]);
                });                    
            } catch (err) {
                setErrors(err);
            }
            /** set 'isLoading' to false when all data is received */
            setIsLoading(false);
        }

        /** getData on page load */
        if (isLoading){
            getData();
        }
    }, []);
    return [responses, errors, isLoading];
}

export default useAxios;