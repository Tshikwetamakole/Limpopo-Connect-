import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with correct content', () => {
    render(<Footer />);

    // Check for the main heading
    expect(screen.getByText('Limpopo Connect')).toBeInTheDocument();

    // Check for the copyright notice
    expect(screen.getByText(/© 2025 Limpopo Connect. All rights reserved./i)).toBeInTheDocument();

    // Check for the developer credit
    const developerLink = screen.getByRole('link', { name: /Emmanuel Charley Raluswinga/i });
    expect(developerLink).toBeInTheDocument();
    expect(developerLink).toHaveAttribute('href', 'https://charleyraluswinga.space');
  });
});
