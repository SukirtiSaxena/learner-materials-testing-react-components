import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName'
import userEvent from '@testing-library/user-event';
import each from 'jest-each';

describe("Planet Name", () => {

	test('renders header text', () => {
		render(<PlanetName />);
		const labelText = screen.getByText(
			/Planet Name/i
		);
		expect(labelText).toBeInTheDocument();
	});

	test('renders Text Area on screen with id as planetName', () => {
		render(<PlanetName />);
		expect(screen.getByPlaceholderText('Planet Name..')).toBeInTheDocument();
	});

	test('If OnChange function is called for Input Component - SpeciesName', () => {
		const mockOnChange = jest.fn();
		const propPlanet = {
			onChangePlanetName: mockOnChange
		};

		render(<PlanetName {...propPlanet} />);
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
			onChangePlanetName: mockOnChange
		};
		render(<PlanetName {...propPlanet} />);
		userEvent.type(screen.getByPlaceholderText('Planet Name..'), b);
		expect(screen.getByTestId('warning')).toHaveTextContent(expected);
	});

});