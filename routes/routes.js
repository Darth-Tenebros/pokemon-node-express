
const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon.controller');


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
router.get('/pokemon', pokemonController.getAllPokemon);


/**
 * @swagger
 * /pokemon/{id}:
 *  get:
 *      summary: get pokemon by its id
 *      tags: [pokemon]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *          description: The ID of the pokemon
 *      responses:
 *          200:
 *              description: successfully gotten the pokemon
 *              content:
 *                  application/json:
 *                      example: {id: 2, name: '', type: '', owner: ''}
 */
router.get('/pokemon/:id', pokemonController.getByID);


/**
 * @swagger
 * /pokemon/delete/{id}:
 *  delete:
 *      summary: Delete a pokemon by ID
 *      tags: [pokemon]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *          description: The ID of the pokemon to delete
 *      responses:
 *          200:
 *              description: Pokemon successfully deleted
 *              content:
 *                  application/json:
 *                      example:
 *                          message: "Pokemon deleted"
 *          404:
 *              description: Pokemon not found
 */
router.delete('/pokemon/delete/:id', pokemonController.deleteByID);


/**
 * @swagger
 * /pokemon/update/{id}:
 *  put:
 *      summary: Update a pokemon by ID
 *      tags: [pokemon]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *          description: The ID of the pokemon to update
 *        - in: body
 *          name: body
 *          description: The updated pokemon data
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          type:
 *                              type: string
 *                          owner:
 *                              type: string
 *                      example:
 *                          name: "Raichu"
 *                          type: "Electric"
 *                          owner: "Ash"
 *      responses:
 *          200:
 *              description: Pokemon successfully updated
 *              content:
 *                  application/json:
 *                      example:
 *                          id: 1
 *                          name: "Pikachu"
 *                          type: "Electric"
 *                          owner: "Ash"
 *          404:
 *              description: Pokemon not found
 */
router.put('/pokemon/update/:id', pokemonController.updateByID);



module.exports = router;