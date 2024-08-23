const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_DB_CONNSTR);

const pokemonSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    owner: String,
});

const pokemonModel = mongoose.model('Pokemon', pokemonSchema);


/**
 * creates a mongoose pokemonModel object from the given pokemon object
 * and then adds a new document to the pokemons collection in the db
 * @param {Pokemon} pokemon 
 */
exports.createPokemon = (pokemon) => {
    const poke = new pokemonModel({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        owner: pokemon.owner,
    });
    
    poke.save();
}

exports.deletePokemonById = (id) => {
    return pokemonModel.deleteOne({
        id: id
    })
    .exec()
    .catch((error) => {
        console.log(error);
        return error
    });
}