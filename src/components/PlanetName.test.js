import { render, screen } from '@testing-library/react';
import PlanetName from  './PlanetName'
import userEvent from '@testing-library/user-event';

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
});