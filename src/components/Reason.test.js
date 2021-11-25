import { render, screen } from '@testing-library/react';
import Reason from "./Reason";

test('renders header text', () => {
	render(<Reason />);
	const labelText = screen.getByText(
		/Reason/i
	);
	expect(labelText).toBeInTheDocument();
});

test('renders Text Area on screen with id as reason', () => {
	render(<Reason />);
	expect(screen.getAllByRole('textbox').find(i=>i.id === "reason")).toBeInTheDocument();
});