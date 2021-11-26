import { render, screen } from '@testing-library/react';
import Reason from "./Reason";
import userEvent from '@testing-library/user-event';
import each from 'jest-each';

describe("Reason for Sparing", () => {
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
		userEvent.type(screen.getByPlaceholderText('Why..??'), 'We welcome Extraterrestrial collaborations.');
		expect(mockOnChange).toHaveBeenCalledTimes(43);
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Reason to Spare needs to be more than 17 letters.');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Reason needs to be less than 153 letters.');
	});

	each([
		['If Reason is less than 17 character give error', 'We are friends', 'Reason to Spare needs to be more than 17 letters.'],
		['If Reason is greater than 153 character give error', 'aaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaa', 'Reason needs to be less than 153 letters.'],
	]).test('%s', (a, b, expected) => {
		const mockOnChange = jest.fn();
		const propReason = {
			onChangeReason: mockOnChange
		};
		render(<Reason {...propReason} />);
		userEvent.type(screen.getByPlaceholderText('Why..??'), b);
		expect(screen.getByTestId('warning')).toHaveTextContent(expected);
	});
});