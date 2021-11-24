import { render, screen } from '@testing-library/react';
import CheckIfRobot from  './CheckIfRobot'

test('renders header text', () => {
	render(<CheckIfRobot />);
	const labelText = screen.getByText(
		/what is/i
	);
	expect(labelText).toBeInTheDocument();
});