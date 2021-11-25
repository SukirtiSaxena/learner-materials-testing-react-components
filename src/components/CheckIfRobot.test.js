import { render, screen } from '@testing-library/react';
import CheckIfRobot from  './CheckIfRobot'

test('renders header text', () => {
	render(<CheckIfRobot />);
	const labelText = screen.getByText(
		/what is/i
	);
	expect(labelText).toBeInTheDocument();
});

test('renders Select on screen with id as notRobot', () => {
	render(<CheckIfRobot />);
	expect(screen.getAllByRole('combobox').find(i=>i.id === "notRobot")).toBeInTheDocument();
});

test('renders Option 1 on screen with value as Not 4', () => {
	render(<CheckIfRobot />);
	expect(screen.getAllByRole('option').find(i=>i.value === "Not 4")).toBeInTheDocument();
});

test('renders  Option 2 on screen with value as 4', () => {
	render(<CheckIfRobot />);
	expect(screen.getAllByRole('option').find(i=>i.value === "4")).toBeInTheDocument();
});