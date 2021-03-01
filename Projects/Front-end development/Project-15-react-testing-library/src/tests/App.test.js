import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing file App.js', () => {
  it('renders a reading with the text `Pokédex`', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });
  it('Shows the Pokédex when the route is `/`', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    expect(getByText('Encountered pokémons')).toBeInTheDocument();
  });

  it('App has 3 fixed navigation links working', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const homeNav = getByText('Home');
    const aboutNav = getByText('About');
    const favNav = getByText('Favorite Pokémons');

    const homeLinkRef = homeNav.href.replace('http://localhost', '');
    const aboutLinkRef = aboutNav.href.replace('http://localhost', '');
    const favoriteLinkRef = favNav.href.replace('http://localhost', '');

    expect(homeLinkRef).toBe('/');
    expect(aboutLinkRef).toBe('/about');
    expect(favoriteLinkRef).toBe('/favorites');
  });

  it('Page redirect to home page on clicking "Home" nav bar', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const homeNav = getByText('Home');
    fireEvent.click(homeNav);

    const { pathname: homePath } = history.location;
    expect(homePath).toBe('/');
  });

  it('Page redirect to about page on clicking "About" nav bar', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const aboutNav = getByText('About');
    fireEvent.click(aboutNav);

    const { pathname: aboutPath } = history.location;
    expect(aboutPath).toBe('/about');
  });

  it('Page redirect to favorite pokémons page on clicking "Favorite Pokémons" nav bar',
    () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={ history }>
          <App />
        </Router>,
      );

      const favoriteNav = getByText('Favorite Pokémons');
      fireEvent.click(favoriteNav);

      const { pathname: favoritePath } = history.location;
      expect(favoritePath).toBe('/favorites');
    });

  it('Page redirect to "NotFound" when insert unknown URL', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    history.push('/unknownURL');

    expect(getByText('Page requested not found')).toBeInTheDocument();
  });
});
