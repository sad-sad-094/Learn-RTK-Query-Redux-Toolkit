/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from '../App';
import ToDoApp from '../components/Pages/ToDoApp';
import PokemonApp from "../components/Pages/PokemonApp";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />
        <Route path="pokemon" element={<PokemonApp />} />
        <Route path="todos" element={<ToDoApp />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>

  )

}

export default AppRoutes;

