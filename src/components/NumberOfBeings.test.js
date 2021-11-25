import { render, screen } from '@testing-library/react';
import NumberOfBeings from  './NumberOfBeings'

test('renders header text', () => {
	render(<NumberOfBeings />);
	const labelText = screen.getByText(
		/Number Of Beings/i
	);
	expect(labelText).toBeInTheDocument();
});

test('renders Text Area on screen with id as numberOfBeings', () => {
	render(<NumberOfBeings />);
	expect(screen.getAllByRole('textbox').find(i=>i.id === "numberOfBeings")).toBeInTheDocument();
});