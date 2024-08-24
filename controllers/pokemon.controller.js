const repository = require('../database/mongo.database');

exports.createPokemon = (req, res) => {
    const {id, name, type, owner} = req.body;


    if(!id || !name || !type || !owner){
        res.status(400).send({message: "all fields {name, type, owner} are required!"});
    }

    const newPoke = {
        id: id,
        name: name,
        type: type,
        owner: owner
    }

    repository.createPokemon(newPoke)
    .then((result) => {
        res.status(200)
        .json({
            message: "pokemon created successfully",
            data: result
        })
    })
    .catch((error) => {
        res.status(500)
        .json({
            message: "pokemon creation failed",
            data: error
        })
    });
}

exports.getAllPokemon = (req, res) => {
    
}

exports.getByID = (req, res) => {
    
}

exports.updateByID = (req, res) => {
    
}


exports.deleteByID = (req, res) => {
    const id = parseInt(req.params.id);

    repository.deletePokemonById(id)
    .then((result) => {
        res.status(200)
        .json({
            message: "pokemon deleted successfully",
            data: result
        })
    })
    .catch((error) => {
        res.status(500)
        .json({
            message: "deletion failed",
            data: error
        })
    });
}