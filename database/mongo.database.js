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
    .save();
}

exports.deletePokemonById = (id) => {
    return pokemonModel.pokemonModel.deleteOne({
        id: id
    })
    .exec();
}

exports.getAllPokemon = () => {
    return pokemonModel.pokemonModel.find({});
}

exports.updateById = (id, updatedData) => {
    return pokemonModel.pokemonModel.updateOne(
        {id: id},
        {$set: updatedData}
    )
    .exec();
}