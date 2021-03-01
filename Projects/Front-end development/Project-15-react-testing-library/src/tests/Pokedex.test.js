import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';

describe('Testing file Pokedex.js', () => {
  it('Show next pokémon when button "Próximo pokemon" is fired', () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const nextPokémonButton = getByRole('button', { name: /Próximo pokémon/i });
    // O botão deve conter o texto Próximo pokémon;
    expect(nextPokémonButton).toBeInTheDocument();

    // Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão.
    // Como o pikachu já aparece renderizado não precisa de fazer um fireEvent nele.
    expect(getByText('Pikachu')).toBeInTheDocument();
    // Verificando se segundo pokemon vai renderizar e repetir até Pikachu denovo.
    fireEvent.click(nextPokémonButton);
    expect(getByText('Charmander')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Caterpie')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Ekans')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Alakazam')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Mew')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Rapidash')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Snorlax')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Dragonair')).toBeInTheDocument();
    // O primeiro Pokémon da lista deve ser mostrado ao clicar no botão se estiver no último Pokémon da lista.
    fireEvent.click(nextPokémonButton);
    expect(getByText('Pikachu')).toBeInTheDocument();
  });

  it('Shows only one pokémon at time', () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(getAllByTestId(/pokemon-name/).length).toBe(1);
  });

  it('Verify if Pokédex has filter buttons', () => {
    const { getByTestId, getAllByTestId, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const pokemonType = getByTestId('pokemonType');
    const pokemonTypeButton = getAllByTestId('pokemon-type-button');
    const nextPokémonButton = getByRole('button', { name: /Próximo pokémon/i });
    // const SETE = 7;
    // expect(pokemonTypeButton.length).toBe(SETE);

    pokemonTypeButton.forEach((type) => {
      fireEvent.click(type);
      expect(pokemonType.textContent).toBe(type.textContent);
      fireEvent.click(nextPokémonButton);
      expect(pokemonType.textContent).toBe(type.textContent);
    });
  });

  it('Verify if Pokédex has reset filter button', () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const allPokemonsButton = getByRole('button', { name: /All/i });
    const nextPokémonButton = getByRole('button', { name: /Próximo pokémon/i });

    fireEvent.click(allPokemonsButton);

    expect(nextPokémonButton).toBeInTheDocument();
    expect(getByText('Pikachu')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Charmander')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Caterpie')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Ekans')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Alakazam')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Mew')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Rapidash')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Snorlax')).toBeInTheDocument();

    fireEvent.click(nextPokémonButton);
    expect(getByText('Dragonair')).toBeInTheDocument();
  });

  it('Verify if is dinamically created a filter button for each pokémon type',
    () => {
      const { getAllByTestId, getByRole } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );
      const pokemonTypeButton = getAllByTestId('pokemon-type-button');
      const allPokemonsButton = getByRole('button', { name: /All/i });
      const numberOfTypeButtons = 7;
      expect(pokemonTypeButton.length).toBe(numberOfTypeButtons);
      expect(allPokemonsButton).toBeInTheDocument();
    });

  it('Next pokémon button must be disabled when the list has only one pokémon',
    () => {
      const { getAllByRole, getByRole } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );
      const pokedexButtonPanel = getAllByRole('button');
      const bugTypeButton = pokedexButtonPanel[3];
      const nextPokémonButton = getByRole('button', { name: /Próximo pokémon/i });

      fireEvent.click(bugTypeButton);

      expect(nextPokémonButton).toBeDisabled();
    });

  it('there is a title on the page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(getByText(/Encountered pokémons/i)).toBeInTheDocument();
  });
});
