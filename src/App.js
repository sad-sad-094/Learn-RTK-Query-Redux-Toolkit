/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import './App.css';
import ToDoApp from './components/Pages/ToDoApp';
// import Counter from './components/Pages/Counter';
// import PokemonApp from './components/Pages/PokemonApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <PokemonApp /> */}
        <ToDoApp />
      </header>
    </div>
  );
}

export default App;
