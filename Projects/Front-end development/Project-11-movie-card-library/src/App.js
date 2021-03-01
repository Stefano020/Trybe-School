import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';


function App() {
  return (
    // Dentro desta div vou chamar meus Componentes
    // para serem todos "juntados" em um só arquivo
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
