/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import axios from "axios";

import { setPokemons, startLoadingPokemons } from "../slices/PokemonSlice"


export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    
    let data = {};

    dispatch(startLoadingPokemons());

    const options = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
      params: { limit: '10', offset: `${page * 10}` }
    };

    await axios.request(options)
      .then((response) => {
        data = response.data;
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      });

    dispatch(setPokemons({pokemons: data.results, page: page + 1}));
  }
}
