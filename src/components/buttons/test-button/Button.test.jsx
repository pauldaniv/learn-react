// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    test('renders the button with correct text', () => {
        const { getByText } = render(<Button text="Click Me" />);
        expect(getByText('Click Me')).toBeInTheDocument();
    });

    test('calls onClick when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button text="Click Me" onClick={onClickMock} />);
        fireEvent.click(getByText('Click Me'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
