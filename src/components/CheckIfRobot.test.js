import { render, screen } from '@testing-library/react';
import CheckIfRobot from './CheckIfRobot'
import userEvent from '@testing-library/user-event';

test('renders header text', () => {
	render(<CheckIfRobot />);
	const labelText = screen.getByText(
		/what is/i
	);
	expect(labelText).toBeInTheDocument();
});

test('renders Select on screen with id as notRobot', () => {
	render(<CheckIfRobot />);
	expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('renders Option 1 on screen with value as Not 4', () => {
	render(<CheckIfRobot />);
	expect(screen.getByTestId("opt1")).toBeInTheDocument();
});

test('renders  Option 2 on screen with value as 4', () => {
	render(<CheckIfRobot />);
	expect(screen.getByTestId("opt2")).toBeInTheDocument();
});

test('If OnChange function is called for Select Component - CheckIfRobot', () => {
	const mockOnChange = jest.fn();
	const prop2plus2 = {
		onChangecheckIfRobot: mockOnChange
	};

	render(<CheckIfRobot {...prop2plus2} />);
	userEvent.selectOptions(screen.getByTestId("notRobot"), ["4"]);
	expect(screen.getByTestId("opt1").selected).toBe(false);
	expect(screen.getByTestId("opt2").selected).toBe(true);
	expect(mockOnChange).toHaveBeenCalledTimes(1);
});
