
const express = require('express');
const path = require('path');
const router = express.Router();
const pokemonController = require('../controllers/pokemon.controller');
const middleware = require('../middleware/pokemon.middleware');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html')); // Serving the static HTML file
});


router.post('/pokemon/create', middleware.incrementIdMiddleware, pokemonController.createPokemon);


router.get('/pokemon', pokemonController.getAllPokemon);


router.get('/pokemon/:id', pokemonController.getByID);


router.delete('/pokemon/delete/:id', pokemonController.deleteByID);


router.put('/pokemon/update/:id', pokemonController.updateByID);



module.exports = router;