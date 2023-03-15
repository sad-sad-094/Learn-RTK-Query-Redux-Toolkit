/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { configureStore } from "@reduxjs/toolkit";

import { toDoAPIs } from "./APIs/ToDoAPIs";
import counterReducer from "./slices/CounterSlice";
import pokemonReducer from "./slices/PokemonSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,

    [toDoAPIs.reducerPath]: toDoAPIs.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(toDoAPIs.middleware)
  
}) 
