'use strict';

const PokemonItem = (pokeItem) => {

	const itemContainer = $('<div class="pokemon-container center col"></div>');
	const pokemonName = $('<p class="pokemon-name">'+pokeItem.pokemon_species.name+'</p>');
	const pokemonImage =$('<img src="http://serebii.net/art/th/' + pokeItem.entry_number + '.png" alt="' + pokeItem.pokemon_species.name + '"class="pokemon-image">');
	itemContainer.append(pokemonImage);
	itemContainer.append(pokemonName);
	//console.log(pokeItem)
	//console.log(pokeItem.entry_number)
	return itemContainer;
}

const reRender = (container,filterInput,update) => {

	container.empty();
	const filteredPokemons = filterByPokemon(state.pokemons.pokemon_entries,filterInput);

	filteredPokemons.forEach((pokemon) => {
		// const pokemonItem = PokemonItem({
		// 	pokemon: pokemon,
		// 	update: update
		// });
		const pokemonItem = PokemonItem(pokemon);


		container.append(pokemonItem);
	});
};

const Searcher = (update) => {
	const search = $('<div class="main"></div>')
	const row = $('<div class="row"></div>');
	const colInput = $('<div class="col s7"></div>');
	const form = $('<form></form>');
	const div = $('<div class="input-field"></div>');
	const input = $('<input id="search" type="search" autocomplete="off">');
	const label = $('<label class="label-icon" for="search"></label>');
	const searchIcon = $('<i class="material-icons">search</i>');
	const closeIcon = $('<i class="material-icons">close</i>');
	const showPokemon = $('<div class="show-pokemon row"></div>');

	div.append(input);
	label.append(searchIcon);
	div.append(label);
	div.append(closeIcon);
	form.append(div);
	colInput.append(form);
	row.append(colInput);
	search.append(row);
	search.append(showPokemon);

	input.on('keyup',(e) => {
		const filterInput = input.val();
		const pokemonsData = state.pokemons.pokemon_entries;
		reRender(showPokemon,filterInput,update);
	})
	reRender(showPokemon,'',update);
	return search;
}