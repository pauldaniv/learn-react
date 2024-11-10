// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import for extended DOM matchers like toBeInTheDocument
import CustomButton from './Button';

describe('Button Component', () => {
    it('renders the button with correct text', () => {
        const { getByText } = render(<CustomButton text="Click Me" />);
        expect(getByText('Click Me')).toBeInTheDocument();
    });

    it('calls onClick when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<CustomButton text="Click Me" onClick={onClickMock} />);
        fireEvent.click(getByText('Click Me'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
