import { render, screen } from '@testing-library/react';
import PlanetName from  './PlanetName'

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