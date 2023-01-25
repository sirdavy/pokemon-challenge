const fetchPokemon = (myPokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${myPokemon}`)
    .then((response) => response.json())
    .then((data) => {
    let newPokemon = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map((element) => {
          return element.type.name;
      })  
    };
      console.log(newPokemon)
    })
  }

  module.exports = fetchPokemon

