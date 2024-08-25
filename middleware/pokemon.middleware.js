const pokemonModel = require('../models/pokemon.model');


const incrementIdMiddleware = (req, res, next) => {
    if (!req.body.id) {
        // Find the last inserted document
        pokemonModel.pokemonModel.findOne().sort({ id: -1 }).exec()
        .then(lastObject => {
            let newId;

            if(lastObject) {
            newId = lastObject.id + 1;
            }else{
                newId = 1;
            }
            req.body.id = newId;
            next();
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal server error');
        });
        
    }else{
        next();
    }
};
  
  
exports.incrementIdMiddleware = incrementIdMiddleware;  