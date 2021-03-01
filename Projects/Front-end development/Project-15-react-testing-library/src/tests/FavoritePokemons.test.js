import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testing file FavoritePokemons.js', () => {
  it('Page shows "No favorite pokemon found" if there is no favorite pokemons selected',
    () => {
      const { getByText } = render(<FavoritePokemons />);

      const noFavorites = getByText(/No favorite pokemon found/i);

      expect(noFavorites).toBeInTheDocument();
    });

  it('Page shows all favorite pokémons if there is any favorited', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(getByText(/more details/i));
    fireEvent.click(getByText(/Pokémon favoritado?/i));
    fireEvent.click(getByText(/Favorite Pokémons/i));

    const pikachu = getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
