/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    page: 0,
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  }
})

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
