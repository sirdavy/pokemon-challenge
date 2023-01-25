const fetchPokemon = require("./api.js");

class Pokedex {
  constructor() {
    this.allPokemon = [];
}

catch(pokemon) {
  fetchPokemon(pokemon)
  this.allPokemon.push(pokemon) 
}

all() {
return this.allPokemon
}


}

module.exports = Pokedex; 
