'use strict';

const render = (root) => {

	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
	
	const update = function() {
		render(root);
	}

	wrapper.append(Header(update));
	wrapper.append(Searcher(update));
//	wrapper.append(PokemonItem());

	root.append(wrapper);

}

const state = {
	pokemons: null,
	selectedPokemon: null
};

$( _ => {

	/*	
	$.getJSON('http://pokeapi.co/api/v2/pokemon-species/', (data) => {
    console.log(data)
	})
	*/

	getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

		if(err){ return alert(err.message);}

		state.pokemons = json;
		// console.log(state.pokemons.pokemon_entries);

		const root = $('.root');
		render(root)
	});
});
