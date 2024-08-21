const repository = require('../database/mongo.database');

exports.getAllPokemon = (req, res) => {
    
}

exports.getByID = (req, res) => {
    
}

exports.updateByID = (req, res) => {
    
}


exports.deleteByID = async (req, res) => {
    const id = parseInt(req.params.id);
    
    const result = await repository.deletePokemonById(id);
    if(result.length > 1){
        res.send(result);
    }else{
        res.status(404).send({message: `pokemon with id ${id} not found`});
    }
}