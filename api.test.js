const fetchPokemon = require('./api');

describe('fetchPokemon test', () => {
  it('returns an object with Pokemon data', (done) => {
    fetchPokemon('pikachu').then((barry) => {
       expect(barry.name).toEqual('pikachu');
        done();
      });
  });
});