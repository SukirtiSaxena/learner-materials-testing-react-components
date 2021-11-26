import { render, screen } from '@testing-library/react';
import Reason from "./Reason";
import userEvent from '@testing-library/user-event';

test('renders header text', () => {
	render(<Reason />);
	const labelText = screen.getByText(
		/Reason/i
	);
	expect(labelText).toBeInTheDocument();
});

test('renders Text Area on screen with id as reason', () => {
	render(<Reason />);
	expect(screen.getByPlaceholderText('Why..??')).toBeInTheDocument();
});

test('If OnChange function is called for Input Component - SpeciesName', () => {
	const mockOnChange = jest.fn();
	const propReason = {
		onChangeReason: mockOnChange
	};

	render(<Reason {...propReason} />);
	userEvent.type(screen.getByPlaceholderText('Why..??'), 'Why?');
	expect(mockOnChange).toHaveBeenCalledTimes(4);
});