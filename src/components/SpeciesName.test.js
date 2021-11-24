import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders header text', () => {
	render(<SpeciesName />);
	const labelText = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});