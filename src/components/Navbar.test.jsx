import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';

// Mock react-router-dom
const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

// Mock the AuthContext
vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: null,
    isAuthenticated: false,
    login: vi.fn(),
    logout: vi.fn(),
  }),
  AuthProvider: ({ children }) => <div>{children}</div>,
}));

// Mock the ThemeContext
vi.mock('../contexts/ThemeContext', () => ({
    useTheme: () => ({
      theme: 'light',
      toggleTheme: vi.fn(),
    }),
    ThemeProvider: ({ children }) => <div>{children}</div>,
}));

const renderNavbar = () => {
  return render(
    <ThemeProvider>
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </AuthProvider>
    </ThemeProvider>
  );
};

describe('Navbar', () => {
  it('should navigate to events page using useNavigate on search', () => {
    renderNavbar();

    const searchButton = screen.getByLabelText('Toggle search');
    fireEvent.click(searchButton);

    const searchInput = screen.getByPlaceholderText('Search events, groups...');
    fireEvent.change(searchInput, { target: { value: 'test query' } });

    const searchForm = screen.getByRole('form', { name: 'Search form' });
    fireEvent.submit(searchForm);

    expect(mockedUseNavigate).toHaveBeenCalledWith('/events?search=test%20query');
  });
});
