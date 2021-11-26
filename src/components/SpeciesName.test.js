import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SpeciesName from './SpeciesName';
import each from 'jest-each';

describe("Species Name", () => {
	test('renders header text', () => {
		render(<SpeciesName />);
		const labelText = screen.getByText(/Species Name/i);
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
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be at least three characters');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be less than twenty three characters');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Invalid characters');
	});

	each([
		['If Species Name has a special character give error', 'adc#$', 'Invalid characters'],
		['If Species Name is a number give error', '123456', 'Invalid characters'],
		['If Species Name is greter than 23 letters give error', 'aaaaaaaaaaaaaaaaaaaaaaaaa', 'Species Name needs to be less than twenty three characters'],
		['If Species Name is less than 3 letters give error', 'ab', 'Species Name needs to be at least three characters']

	]).test('%s', (a, b, expected) => {
		const mockOnChange = jest.fn();
		const propSpecies = {
			onChangeSpeciesName: mockOnChange
		};
		render(<SpeciesName {...propSpecies} />);
		userEvent.type(screen.getByPlaceholderText('Species Name..'), b);
		expect(screen.getByTestId('warning')).toHaveTextContent(expected);
	});

});