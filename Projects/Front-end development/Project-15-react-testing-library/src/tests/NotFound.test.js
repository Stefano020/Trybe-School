import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Testing file NotFound.js', () => {
  it('Page contains an heading "h2" with text Page requested not found 😭', () => {
    render(<NotFound />);

    const pageNotFound = screen.getByRole('heading', { level: 2 });
    expect(pageNotFound.innerHTML.includes('Page requested not found')).toBe(true);
  });

  it('Page contains image with "src" = https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif ',
    () => {
      const { container } = render(<NotFound />);
      const PageNotFoundImage = container.querySelector('img');

      expect(PageNotFoundImage.src).toBe(
        'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
      );
    });
});
