import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App.jsx';

// Render App with BrowserRouter using BASE_URL
function renderApp() {
  return render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  );
}

describe('App smoke', () => {
  it('renders navbar and main layout', () => {
    renderApp();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
