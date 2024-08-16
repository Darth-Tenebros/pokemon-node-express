
const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon.model');


/**
 * @swagger
 * /pokemon:
 *  get:
 *      summary: get all available pokemon
 *      tags: [pokemon]
 *      responses:
 *          200:
 *              description: successfully gotten the pokemon
 *              content:
 *                  application/json:
 *                      example: [{}]
 */
router.get('/pokemon', pokemon.getAllPokemon);


/**
 * @swagger
 * /pokemon/{id}:
 *  get:
 *      summary: get pokemon by its id
 *      tags: [pokemon]
 *      responses:
 *          200:
 *              description: successfully gotten the pokemon
 *              content:
 *                  application/json:
 *                      example: {id: 2, name: '', type: '', owner: ''}
 */
router.get('/pokemon/:id', pokemon.getByID);



module.exports = router;