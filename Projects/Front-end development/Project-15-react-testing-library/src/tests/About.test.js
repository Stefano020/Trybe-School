import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('Testing file about.js', () => {
  it('Page contains Podédex informations', () => {
    const { getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const infoAboutPokédex = getByText(
      /One can filter Pokémons by type, and see more details for each one of them/i,
    );

    expect(infoAboutPokédex).toBeInTheDocument();
  });

  it('Page contains an <h2> with "About Pokédex" text inside', () => {
    const { getByText } = render(<About />);

    const heading = getByText(/About Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  it('Page contains 2 paragraphs with texts about Pokédex', () => {
    const { container } = render(<About />);
    const paragraph = container.querySelectorAll('p');
    const numberOfParagraphs = 2;

    expect(paragraph.length).toBe(numberOfParagraphs);
  });

  it('Page contains expected URL for Pokédex image', () => {
    const { getByRole } = render(<About />);
    const pokédexImage = getByRole('img');

    expect(pokédexImage.src).toBe(
      'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
