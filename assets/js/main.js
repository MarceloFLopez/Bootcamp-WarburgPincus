function convertePokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) =>{
        return `<li class="type">${typeSlot.type.name}</li>`
    })
}


function convertPokemonToLi(pokemon) {
    return ` 
            <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertePokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img class="img_poke" src="${pokemon.sprites.other.dream_world.front_default}" 
                        alt="${pokemon.name}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})



