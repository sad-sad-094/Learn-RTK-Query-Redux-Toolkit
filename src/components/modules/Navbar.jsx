/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigation = useNavigate();

  return (

    <div>
      <nav className="navbar navbar-background" id="navbar">
        <div className="nav-header">
          <h1>Exercise</h1>
        </div>
        <div className="nav-access">
          <ul className="nav-list">
            <li onClick={() => navigation('/pokemon')}>Pokemón</li>
            <li onClick={() => navigation('/todos')}>ToDos</li>
          </ul>
        </div>
      </nav>
    </div>

  )

}

export default Navbar;

