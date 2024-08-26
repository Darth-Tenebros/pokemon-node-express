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

async function getSpriteUrl(pokemonName){
    const link = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

    // 🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error("pokemon not found!");
        }
        const result_1 = await response.json();
        const url = result_1.sprites.front_default;
        return url;
    } catch (error) {
        return null;
    }
}


const addImageMIddleware = (req, res, next) => {
    const old = res.json;
    
    res.json = async function(data) {
        for (const element of data.data) {
            const url = await getSpriteUrl(element._doc.name);
            if(url === null){
                element._doc.url = "image not found";
                continue;
            }
            element._doc.url = url;
        }
        return old.call(this, data);
    }
    next();
}

exports.incrementIdMiddleware = incrementIdMiddleware;
exports.addImageMIddleware = addImageMIddleware; 