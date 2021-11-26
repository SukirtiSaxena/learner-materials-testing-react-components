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
		id:"speciesName",
		name:"speciesName",
		size:"50",
		placeholder:"Species Name..",
		value:"Human",
		onChangeSpeciesName: mockOnChange
	};

	render(<SpeciesName {...propSpecies} />);
	userEvent.type(screen.getByPlaceholderText('Species Name..'), 'Human');
	expect(mockOnChange).toHaveBeenCalledTimes(5);
	expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be at least three characters');
	expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be less than twenty three characters');
	expect(screen.getByTestId('warning')).not.toHaveTextContent('Invalid characters');
});

test('If Species Name is less than 3 letters give error', () => {
	const mockOnChange = jest.fn();
	const propSpecies = {
		id:"speciesName",
		name:"speciesName",
		size:"50",
		placeholder:"Species Name..",
		value:"AB",
		onChangeSpeciesName: mockOnChange
	};

	render(<SpeciesName {...propSpecies} />);
	userEvent.type(screen.getByPlaceholderText('Species Name..'), 'AB');
	expect(screen.getByTestId('warning')).toHaveTextContent('Species Name needs to be at least three characters');
});

test('If Species Name is greter than 23 letters give error', () => {
	const mockOnChange = jest.fn();
	const propSpecies = {
		id:"speciesName",
		name:"speciesName",
		size:"50",
		placeholder:"Species Name..",
		value:"AB",
		onChangeSpeciesName: mockOnChange
	};

	render(<SpeciesName {...propSpecies} />);
	userEvent.type(screen.getByPlaceholderText('Species Name..'), 'aaaaaaaaaaaaaaaaaaaaaaaaa');
	expect(screen.getByTestId('warning')).toHaveTextContent('Species Name needs to be less than twenty three characters');
});

test('If Species Name is a number give error', () => {
	const mockOnChange = jest.fn();
	const propSpecies = {
		id:"speciesName",
		name:"speciesName",
		size:"50",
		placeholder:"Species Name..",
		value:"AB",
		onChangeSpeciesName: mockOnChange
	};

	render(<SpeciesName {...propSpecies} />);
	userEvent.type(screen.getByPlaceholderText('Species Name..'), '123456');
	expect(screen.getByTestId('warning')).toHaveTextContent('Invalid characters');
});
test('If Species Name has a special character give error', () => {
	const mockOnChange = jest.fn();
	const propSpecies = {
		id:"speciesName",
		name:"speciesName",
		size:"50",
		placeholder:"Species Name..",
		value:"AB",
		onChangeSpeciesName: mockOnChange
	};

	render(<SpeciesName {...propSpecies} />);
	userEvent.type(screen.getByPlaceholderText('Species Name..'), 'adc#$');
	expect(screen.getByTestId('warning')).toHaveTextContent('Invalid characters');
});