/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemons } from '../../state/thunks/PokemonThunks';

function PokemonApp() {

  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch])

  return (

    <div>
      <h1>Pokemon App</h1>
      <br />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <ul>
        {pokemons.map((pokemon, i, pokemons) => {
          return (
            <li key={pokemon.name}>{pokemon.name}</li>
          )
        }
        )}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>

    </div>

  )

}

export default PokemonApp;
