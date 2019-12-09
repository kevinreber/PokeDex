const pokedex = document.getElementById('pokedex');
const filter = document.getElementById('filter');

const fetchPokemon = () => {
    const promises = [];
    //loop through original 151 pokemon
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
        const pokeData = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }));
        displayPokemon(pokeData);
    });
};

const displayPokemon = (pokeData) => {
    //.join() to keep all cards in array[0]
    const pokemonHTMLString = pokeData.map(pokemon =>
        `<li class="card">
            <img class="card-image" src="${pokemon.image}" />
            <h2 class="card-title"> ${pokemon.id}.${pokemon.name} </h2>
            <p class="card-subtitle">Type: ${pokemon.type}</p> 
            </li>`).join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

filter.addEventListener('keydown', (e) => {
    let input = e.target.value;

    console.log(input.length);
});