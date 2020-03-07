const pokedex = document.getElementById('pokedex');
const filter = document.getElementById('filter');
let cards;
let pokeData;
let pokeIndex;

const fetchPokemon = () => {
    const promises = [];
    //loop through original 151 pokemon
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
            .then(res => res.json()));
    }

    Promise.all(promises).then(results => {
        pokeData = results.map(data => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            shiny: data.sprites['front_shiny'],
            type: data.types.map(type => type.type.name).join('/').toUpperCase(),
            abilities: data.abilities.map(ability => ability.ability.name).join(', ')
        }));
        displayPokemon(pokeData);
    });
};

function displayPokemon(pokeData) {
    //.join() to keep all cards in array[0]
    const pokemonHTMLString = pokeData.map(pokemon =>
        `<li class="card">
            <img class="card-image" src="${pokemon.image}" />
            <h2 class="card-title"> ${pokemon.id}.${pokemon.name} </h2>
            <p class="card-subtitle">Type: ${pokemon.type}</p> 
            </li>`).join('');
    pokedex.innerHTML = pokemonHTMLString;

    cards = document.querySelectorAll('.card');
    Array.from(cards).forEach((card, index) => {
        card.addEventListener('click', () => {
            pokeIndex = index;
            displayModal(pokeData[index]);
        });
    })
}

function displayModal(pokemon) {
    const pokemonHTMLString = `
    <div class="modal-overlay">
        <div class="modal-cycle-container">
            <div class="modal-button modal-prev">
                <span> < </span>
            </div>
        </div>
        <div class="modal-card">
            <svg class="modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/> 
            </svg>
            <div class="modal-images">
                <img class="card-image" src="${pokemon.image}" />
                <img class="card-image" src="${pokemon.shiny}" />
            </div>
            <div class="modal-text">
                <h2 class="card-title modal-title"> ${pokemon.id}.${pokemon.name} </h2> 
                <p class="card-subtitle modal-text">Type: ${pokemon.type}</p>
                <p class="card-subtitle modal-text">Abilities: ${pokemon.abilities}</p>
            </div> 
        </div>
        <div class="modal-cycle-container">
            <div class="modal-button modal-next">
                <span> > </span>
            </div>
        </div>
    </div>
    `
    overlay.innerHTML = pokemonHTMLString;
    overlay.style.display = 'block';
}

function displayMatches() {
    const matchArray = findMatches(this.value, pokeData);
    displayPokemon(matchArray);
}

function findMatches(wordToMatch, data) {
    const matches = data.filter(pokemon => {
        const regex = new RegExp(wordToMatch, 'gi');
        return pokemon.type.match(regex);
    });
    return matches;
}

overlay.addEventListener('click', (e) => {
    const prev = overlay.querySelector('.modal-prev');
    const next = overlay.querySelector('.modal-next');

    if (e.target.classList.contains('modal-close') || e.target.parentElement.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
        overlay.style.display = 'none';
    }

    if (e.target === next || e.target.parentElement === next) {
        if (pokeIndex === 150) {
            pokeIndex = 0;
        } else {
            pokeIndex++;
        }
        displayModal(pokeData[pokeIndex]);
    }

    if (e.target === prev || e.target.parentElement === prev) {
        if (pokeIndex === 0) {
            pokeIndex = 150;
        } else {
            pokeIndex--;
        }
        displayModal(pokeData[pokeIndex]);
    }
});

filter.addEventListener('keyup', displayMatches);
fetchPokemon();