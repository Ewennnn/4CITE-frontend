import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct label and handles click event', () => {
    const handleClick = jest.fn();

    render(<Button label="Click me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});