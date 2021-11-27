import { render, screen } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';
import each from 'jest-each';

describe("Species Name", () => {
	test('renders header text', () => {
		const propSpecies = {
			label: "Species Name : ",
			id: "speciesName",
			placeholder: "Species Name..",
			name: "speciesName",
			onChangeName: jest.fn()
		};
		render(<Input {...propSpecies} />);
		const labelText = screen.getByText(/Species Name/i);
		expect(labelText).toBeInTheDocument();
	});

	test('renders Input box on screen with id as speciesName', () => {
		const mockOnChange = jest.fn();
		const propSpecies = {
			label: "Species Name : ",
			id: "speciesName",
			placeholder: "Species Name..",
			name: "speciesName",
			onChangeName: mockOnChange
		};
		render(<Input {...propSpecies} />);
		expect(screen.getByPlaceholderText('Species Name..')).toBeInTheDocument();
	});


	test('If OnChange function is called for Input Component - SpeciesName', () => {
		const mockOnChange = jest.fn();
		const propSpecies = {
			label: "Species Name : ",
			id: "speciesName",
			placeholder: "Species Name..",
			name: "speciesName",
			onChangeName: mockOnChange
		};

		render(<Input {...propSpecies} />);
		userEvent.type(screen.getByPlaceholderText('Species Name..'), 'Human');
		expect(mockOnChange).toHaveBeenCalledTimes(5);
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be at least three characters');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Species Name needs to be less than twenty three characters');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Invalid characters');
	});

	each([
		['If Species Name has a special character give error', 'adc#$', 'Invalid characters'],
		['If Species Name is a number give error', '123456', 'Invalid characters'],
		['If Species Name is greter than 23 letters give error', 'aaaaaaaaaaaaaaa aaaa aaaaaa', 'Species Name needs to be less than twenty three characters'],
		['If Species Name is less than 3 letters give error', 'a', 'Species Name needs to be at least three characters']

	]).test('%s', (a, b, expected) => {
		const mockOnChange = jest.fn();
		const propSpecies = {
			label: "Species Name : ",
			id: "speciesName",
			placeholder: "Species Name..",
			name: "speciesName",
			onChangeName: mockOnChange
		};
		render(<Input {...propSpecies} />);
		userEvent.type(screen.getByPlaceholderText('Species Name..'), b);
		expect(screen.getByTestId('warning')).toHaveTextContent(expected);
	});

});

describe("Planet Name", () => {

	test('renders header text', () => {
		const propPlanet = {
			label: "Planet Name : ",
			id: "planetName",
			placeholder: "Planet Name..",
			name: "planetName",
			onChangeName: jest.fn()
		};
		render(<Input {...propPlanet} />);
		const labelText = screen.getByText(
			/Planet Name/i
		);
		expect(labelText).toBeInTheDocument();
	});

	test('renders Text Area on screen with id as planetName', () => {
		const propPlanet = {
			label: "Planet Name : ",
			id: "planetName",
			placeholder: "Planet Name..",
			name: "planetName",
			onChangeName: jest.fn()
		};
		render(<Input {...propPlanet} />);
		expect(screen.getByPlaceholderText('Planet Name..')).toBeInTheDocument();
	});

	test('If OnChange function is called for Input Component - SpeciesName', () => {
		const mockOnChange = jest.fn();
		const propPlanet = {
			label: "Planet Name : ",
			id: "planetName",
			placeholder: "Planet Name..",
			name: "planetName",
			onChangeName: mockOnChange
		};
		render(<Input {...propPlanet} />);
		userEvent.type(screen.getByPlaceholderText('Planet Name..'), 'Mars');
		expect(mockOnChange).toHaveBeenCalledTimes(4);
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Planet Name needs to be at least two characters');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Planet Name needs to be less than 49 characters');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Invalid characters');
	});

	each([
		['If Planet Name is less than 2 letters give error', 'a', 'Planet Name needs to be at least two characters'],
		['If Planet Name is greter than 49 letters give error', 'aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa', 'Planet Name needs to be less than 49 characters'],
		['If Planet Name has special characters, give error', 'aadc#$', 'Invalid characters']

	]).test('%s', (a, b, expected) => {
		const mockOnChange = jest.fn();
		const propPlanet = {
			label: "Planet Name : ",
			id: "planetName",
			placeholder: "Planet Name..",
			name: "planetName",
			onChangeName: mockOnChange
		};
		render(<Input {...propPlanet} />);
		userEvent.type(screen.getByPlaceholderText('Planet Name..'), b);
		expect(screen.getByTestId('warning')).toHaveTextContent(expected);
	});

});

describe("Number Of Being", () => {

	test('renders header text', () => {
		const mockOnChange = jest.fn();
		const propNumberOfBeings = {
			label: "Number Of Beings : ",
			id: "numberOfBeings",
			placeholder: "Number Of Beings..",
			name: "numberOfBeings",
			onChangeName: mockOnChange
		};
		render(<Input {...propNumberOfBeings} />);

		const labelText = screen.getByText(
			/Number Of Beings/i
		);
		expect(labelText).toBeInTheDocument();
	});

	test('renders Text Area on screen with id as numberOfBeings', () => {
		const mockOnChange = jest.fn();
		const propNumberOfBeings = {
			label: "Number Of Beings : ",
			id: "numberOfBeings",
			placeholder: "Number Of Beings..",
			name: "numberOfBeings",
			onChangeName: mockOnChange
		};
		render(<Input {...propNumberOfBeings} />);
		expect(screen.getByPlaceholderText('Number Of Beings..')).toBeInTheDocument();
	});

	test('If OnChange function is called for Input Component - SpeciesName', () => {
		const mockOnChange = jest.fn();
		const propNumberOfBeings = {
			label: "Number Of Beings : ",
			id: "numberOfBeings",
			placeholder: "Number Of Beings..",
			name: "numberOfBeings",
			onChangeName: mockOnChange
		};
		render(<Input {...propNumberOfBeings} />);
		userEvent.type(screen.getByPlaceholderText('Number Of Beings..'), '1000000001');
		expect(mockOnChange).toHaveBeenCalledTimes(10);
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Number of Beings needs to be at least 1,000,000,000');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Invalid characters. Enter only Numbers');
	});

	each([
		['If Number of Beings are less than 1,000,000,000 give error ', '100', 'Number of Beings needs to be at least 1,000,000,000'],
		['If Number of Beings are given in text, give error', 'Huge Number', 'Invalid characters. Enter only Numbers'],
		['If Number of Beings are given in special characters, give error', 'a#$@#$', 'Invalid characters. Enter only Numbers']

	]).test('%s', (a, b, expected) => {
		const mockOnChange = jest.fn();
		const propNumberOfBeings = {
			label: "Number Of Beings : ",
			id: "numberOfBeings",
			placeholder: "Number Of Beings..",
			name: "numberOfBeings",
			onChangeName: mockOnChange
		};
		render(<Input {...propNumberOfBeings} />);
		userEvent.type(screen.getByPlaceholderText('Number Of Beings..'), b);
		expect(screen.getByTestId('warning')).toHaveTextContent(expected);
	});

});
