const Pokedex = require('./pokedex');
const fetchPokemon = require('./api');

describe('it tests the pokedex', () => {

  it('returns empty array using all method with empty pokedex', () => {
    const newdex = new Pokedex();
    expect(newdex.all()).toEqual([]) 
  });

  it('it adds a mocked pokemon to the pokedex', () => {
    const newdex = new Pokedex();
    const myPokemonDouble = { 
      name: 'David',
      id: 213,
      height: 10,
      weight: 20,
  };
    newdex.catch(myPokemonDouble)
    expect(newdex.all()[0].name).toBe('David') 
    expect(newdex.all()[0].height).toBe(10) 
  });

  it('it adds pikachu to the pokedex ', () => {
    const newdex = new Pokedex()
      newdex.catch('pikachu');
      console.log(newdex)
        expect(newdex.all()[0]).toEqual('pikachu');
      });

  it('it adds jigglypuff to the pokedex ', () => {
    const newdex = new Pokedex()
    newdex.catch('jigglypuff');
    console.log(newdex)
    expect(newdex.all()[0]).toEqual('jigglypuff');
    });

});




// describe('fetchPokemon test', () => {
//   it('returns an object with Pokemon data', (done) => {
//     const newdex = new Pokedex()
//     fetchPokemon('pikachu')
//       .then((pokemon) => {
//         newdex.catch(pokemon)
//          expect(newdex.all).toEqual('pikachu');
//           done();
//       });
//   });
