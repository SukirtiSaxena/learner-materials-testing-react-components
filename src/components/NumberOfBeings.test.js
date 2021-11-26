import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings'
import userEvent from '@testing-library/user-event';

test('renders header text', () => {
	render(<NumberOfBeings />);
	const labelText = screen.getByText(
		/Number Of Beings/i
	);
	expect(labelText).toBeInTheDocument();
});

test('renders Text Area on screen with id as numberOfBeings', () => {
	render(<NumberOfBeings />);
	expect(screen.getByPlaceholderText('Number Of Beings..')).toBeInTheDocument();
});

test('If OnChange function is called for Input Component - SpeciesName', () => {
	const mockOnChange = jest.fn();
	const propNumber = {
		onChangeNumberOfBeings: mockOnChange
	};

	render(<NumberOfBeings {...propNumber} />);
	userEvent.type(screen.getByPlaceholderText('Number Of Beings..'), '100');
	expect(mockOnChange).toHaveBeenCalledTimes(3);
});