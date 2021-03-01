import React, { Component } from 'react';

class Header extends Component {
  render() {
    // Retorno meu header da forma como quero e exporto para ser importado pelo 'app.js'
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
