import { render, screen } from '@testing-library/react';
import Reason from "./Reason";

test('renders header text', () => {
	render(<Reason />);
	const labelText = screen.getByText(
		/Reason/i
	);
	expect(labelText).toBeInTheDocument();
});