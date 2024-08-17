

let pokemon = [
    { id: 1, name: "Pikachu", type: "Electric", owner: "Ash" },
    { id: 2, name: "Charmander", type: "Fire", owner: "Ash" },
    { id: 3, name: "Bulbasaur", type: "Grass/Poison", owner: "Ash" },
    { id: 4, name: "Squirtle", type: "Water", owner: "Ash" },
    { id: 5, name: "Jigglypuff", type: "Normal/Fairy", owner: "Jiggly" },
    { id: 6, name: "Meowth", type: "Normal", owner: "Team Rocket" },
    { id: 7, name: "Psyduck", type: "Water", owner: "Mist" },
    { id: 8, name: "Machop", type: "Fighting", owner: "Brock" },
    { id: 9, name: "Eevee", type: "Normal", owner: "Sylvia" },
    { id: 10, name: "Gengar", type: "Ghost/Poison", owner: "Haunter" },
    { id: 11, name: "Onix", type: "Rock/Ground", owner: "Brock" },
    { id: 12, name: "Lapras", type: "Water/Ice", owner: "Lorelei" },
    { id: 13, name: "Snorlax", type: "Normal", owner: "Nurse Joy" },
    { id: 14, name: "Alakazam", type: "Psychic", owner: "Kadabra" },
    { id: 15, name: "Gyarados", type: "Water/Flying", owner: "Red" }
];

exports.getAllPokemon = (req, res) => {
    res.send(pokemon);
}

exports.getByID = (req, res) => {
    const id  = parseInt(req.params.id);
    const poke = pokemon.find(
        (p) => p.id === id
    );

    if(!poke){
        res.status(404).send();
    }else{
        res.send(poke);
    }
}