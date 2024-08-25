
const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon.controller');
const middleware = require('../middleware/pokemon.middleware');


/**
 * @swagger
 * /pokemon/create:
 *  post:
 *      summary: Create a new pokemon
 *      tags: [pokemon]
 *      requestBody:
 *          description: create a new pokemon
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                          - type
 *                          - owner
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Jigglypuff"
 *                          type:
 *                              type: string
 *                              example: "Normal/Fairy"
 *                          owner:
 *                              type: string
 *                              example: "Jiggly"
 *      responses:
 *          201:
 *              description: Pokemon successfully created
 *              content:
 *                  application/json:
 *                      example:
 *                          id: 16
 *                          name: "Jigglypuff"
 *                          type: "Normal/Fairy"
 *                          owner: "Jiggly"
 *          400:
 *              description: Bad request, missing required fields
 */
router.post('/pokemon/create', middleware.incrementIdMiddleware, pokemonController.createPokemon);

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