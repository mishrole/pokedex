'use strict';

const filterByPokemon = (pokemonsData,name) => {
	return pokemonsData.filter((pokemon) => {
		return pokemon.pokemon_species.name.toLowerCase().indexOf(name.toLowerCase()) !=-1;
	});
};
