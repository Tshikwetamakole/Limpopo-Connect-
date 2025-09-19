import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';

describe('Home page', () => {
  it('shows the two main cards', () => {
    render(
      <MemoryRouter initialEntries={[`${import.meta.env.BASE_URL}`]}>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /welcome to limpopo connect/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /find hookups/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /limpopo community activities/i })).toBeInTheDocument();
  });
});
