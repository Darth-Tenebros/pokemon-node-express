const pokemonModel = require('../models/pokemon.model');


/**
 * creates a mongoose pokemonModel object from the given pokemon object
 * and then adds a new document to the pokemons collection in the db
 * @param {Pokemon} pokemon 
 */
exports.createPokemon = (pokemon) => {
    return new pokemonModel.pokemonModel({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        owner: pokemon.owner,
    })
    .save()
    .catch((error) => {
        console.log(error);
        return error;
    });
}

exports.deletePokemonById = (id) => {
    return pokemonModel.pokemonModel.deleteOne({
        id: id
    })
    .exec()
    .catch((error) => {
        console.log(error);
        return error
    });
}

exports.getAllPokemon = () => {
    
}