import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testing file PokemonDetails.js', () => {
  it('Verify if selected pokemon detail information shows on screen', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const pokemonDetailsButton = getByText(/More details/i);
    fireEvent.click(pokemonDetailsButton);

    const pokemonDetailsName = getByText(/Pikachu Details/i);
    expect(pokemonDetailsName).toBeInTheDocument();

    const pokemonDetailsSummary = getByRole('heading', { name: 'Summary', level: 2 });
    expect(pokemonDetailsSummary).toBeInTheDocument();

    const pokemonDetailsSummaryText = getByText(
      /Pokémon roasts hard berries with electricity/i,
    );
    expect(pokemonDetailsSummaryText).toBeInTheDocument();
  });

  it('Verify if there is maps with pokemon locations', () => {
    const { getByText, getAllByAltText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const pokemonDetailsButton = getByText(/More details/i);
    fireEvent.click(pokemonDetailsButton);

    const pokemonLocations = getByText(/Game Locations of Pikachu/i);
    expect(pokemonLocations).toBeInTheDocument();

    const pokemonFirstLocal = getByText(/Kanto Viridian Forest/i);
    expect(pokemonFirstLocal).toBeInTheDocument();

    const pokemonSecondLocal = getByText(/Kanto Power Plant/i);
    expect(pokemonSecondLocal).toBeInTheDocument();

    const images = getAllByAltText(/Pikachu location/i);
    expect(images[0]).toHaveAttribute('src',
      'https://cdn.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(images[1]).toHaveAttribute('src',
      'https://cdn.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Verify if user can favorite pokémon on details page', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const pokemonDetailsButton = getByText(/More details/i);
    fireEvent.click(pokemonDetailsButton);

    const favoritePokemon = getByText(/Pokémon favoritado?/i);
    expect(favoritePokemon).toBeInTheDocument();
    const favoritePokemonCheckbox = getByRole('checkbox');
    fireEvent.click(favoritePokemonCheckbox);
    expect(favoritePokemonCheckbox.checked).toBeTruthy();
  });
});
