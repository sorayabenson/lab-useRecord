import React from 'react';
import { render, screen } from '@testing-library/react';
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
    expect(colorSquare).toHaveStyle('background-color: firstcolor');
    //pick new color
    expect(colorSquare).toHaveStyle('background-color: newcolor');

    userEvent.click(undo);
    expect(colorSquare).toHaveStyle('background-color: firstcolor');
    userEvent.click(redo);
    expect(colorSquare).toHaveStyle('background-color: newcolor');
  });
});
