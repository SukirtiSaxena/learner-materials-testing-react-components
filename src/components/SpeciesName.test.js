import { render, screen } from '@testing-library/react';
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
	expect(screen.getAllByRole('textbox').find(i=>i.id === "speciesName")).toBeInTheDocument();
});