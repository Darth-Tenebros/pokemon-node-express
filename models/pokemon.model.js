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

exports.pokemonModel = pokemonModel;