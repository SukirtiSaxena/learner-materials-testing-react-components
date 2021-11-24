import { render, screen } from '@testing-library/react';
import PlanetName from  './PlanetName'

test('renders header text', () => {
	render(<PlanetName />);
	const labelText = screen.getByText(
		/Planet Name/i
	);
	expect(labelText).toBeInTheDocument();
});