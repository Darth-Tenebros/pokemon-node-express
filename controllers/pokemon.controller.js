const repository = require('../database/mongo.database');

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