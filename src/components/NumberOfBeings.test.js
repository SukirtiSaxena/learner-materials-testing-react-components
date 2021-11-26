import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings'
import userEvent from '@testing-library/user-event';
import each from 'jest-each';

describe("Number Of Being", () => {

	test('renders header text', () => {
		render(<NumberOfBeings />);
		const labelText = screen.getByText(
			/Number Of Beings/i
		);
		expect(labelText).toBeInTheDocument();
	});

	test('renders Text Area on screen with id as numberOfBeings', () => {
		render(<NumberOfBeings />);
		expect(screen.getByPlaceholderText('Number Of Beings..')).toBeInTheDocument();
	});

	test('If OnChange function is called for Input Component - SpeciesName', () => {
		const mockOnChange = jest.fn();
		const propNumber = {
			onChangeNumberOfBeings: mockOnChange
		};

		render(<NumberOfBeings {...propNumber} />);
		userEvent.type(screen.getByPlaceholderText('Number Of Beings..'), '1000000001');
		expect(mockOnChange).toHaveBeenCalledTimes(10);
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Number of Beings needs to be at least 1,000,000,000');
		expect(screen.getByTestId('warning')).not.toHaveTextContent('Invalid characters. Enter only Numbers');
	});

	each([
		['If Number of Beings are less than 1,000,000,000 give error ', '100', 'Number of Beings needs to be at least 1,000,000,000'],
		['If Number of Beings are given in text, give error', 'Huge Number', 'Invalid characters. Enter only Numbers'],
		['If Number of Beings are given in special characters, give error', 'a#$@#$', 'Invalid characters. Enter only Numbers']

	]).test('%s', (a, b, expected) => {
		const mockOnChange = jest.fn();
		const propNumber = {
			onChangeNumberOfBeings: mockOnChange
		};
		render(<NumberOfBeings {...propNumber} />);
		userEvent.type(screen.getByPlaceholderText('Number Of Beings..'), b);
		expect(screen.getByTestId('warning')).toHaveTextContent(expected);
	});

});