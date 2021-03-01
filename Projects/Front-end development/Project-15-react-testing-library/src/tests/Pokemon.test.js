import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing file Pokemon.js', () => {
  it('Render a pokemon card with it informations', () => {
    const { getByRole, getByTestId, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const pokemonName = getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
    expect(getByText('Pikachu')).toBeInTheDocument();

    expect(getByTestId('pokemonType').textContent).toBe('Electric');

    const pokemonWeight = getByTestId('pokemon-weight');
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonWeight.innerHTML)
      .toBe('Average weight:6.0kg');

    const pokemonImage = getByRole('img');
    expect(pokemonImage).toHaveAttribute(
      'src', 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );
    expect(pokemonImage).toHaveAttribute('alt', 'Pikachu sprite');
  });

  it('Pokemon card has a link to display pokemon details', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <MemoryRouter history={ history }>
        <App />
      </MemoryRouter>,
    );

    const pokemonDetailsLink = getByText(/More details/i);
    fireEvent.click(pokemonDetailsLink);
    // expect(history.location.pathname).toBe('/pokemons/25');
    expect(pokemonDetailsLink.href).toBe('http://localhost/pokemons/25');
  });

  it('Verifiy if there is a star icon on favorited pokémons', () => {
    const { getByText, getByLabelText, getByAltText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(getByText(/More details/i));
    expect(getByLabelText('Pokémon favoritado?')).toBeInTheDocument();
    const favoritePokemonButton = getByLabelText('Pokémon favoritado?');
    fireEvent.click(favoritePokemonButton);
    expect(getByAltText('Pikachu is marked as favorite').src).toBe(
      'http://localhost/star-icon.svg',
    );
  });
});
