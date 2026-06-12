// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainDeep title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainDeep/i);
    expect(titleElement).toBeInTheDocument();
});
