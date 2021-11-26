import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SpeciesName from './SpeciesName';

test('renders header text', () => {
	render(<SpeciesName />);
	const labelText = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});

test('renders Input box on screen with id as speciesName', () => {
	render(<SpeciesName />);
	expect(screen.getByPlaceholderText('Species Name..')).toBeInTheDocument();
});

test('If OnChange function is called for Input Component - SpeciesName', () => {
	const mockOnChange = jest.fn();
	const propSpecies = {
		onChangeSpeciesName: mockOnChange
	};

	render(<SpeciesName {...propSpecies} />);
	userEvent.type(screen.getByPlaceholderText('Species Name..'), 'Human');
	expect(mockOnChange).toHaveBeenCalledTimes(5);
});
