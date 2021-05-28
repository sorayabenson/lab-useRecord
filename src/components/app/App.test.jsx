import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    render(<App />);

    const colorSquare = screen.getByTestId('rang');
    const colorPalette = screen.getByTestId('rangha');
    const undo = screen.getByRole('button', { name: 'undo' });
    const redo = screen.getByRole('button', { name: 'redo' });

    //figure out how to select a color value
    fireEvent.input(colorPalette, { target: { value: '#ff7b00' } });
    expect(colorSquare).toHaveStyle('background-color: #ff7b00');
    
    fireEvent.input(colorPalette, { target: { value: '#ffb700' } });
    expect(colorSquare).toHaveStyle('background-color: #ffb700');
    
    fireEvent.input(colorPalette, { target: { value: '#ffea00' } });
    expect(colorSquare).toHaveStyle('background-color: #ffea00');

    userEvent.click(undo);
    expect(colorSquare).toHaveStyle('background-color: #ffb700');

    userEvent.click(undo);
    expect(colorSquare).toHaveStyle('background-color: #ff7b00');

    userEvent.click(redo);
    expect(colorSquare).toHaveStyle('background-color: #ffb700');
    
    userEvent.click(redo);
    expect(colorSquare).toHaveStyle('background-color: #ffea00');
  });
});
