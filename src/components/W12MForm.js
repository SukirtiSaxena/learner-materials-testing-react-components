import { useState } from 'react';
import TextInput from './TextInput';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />

			<form>
				<TextInput labelFor="sname" labelName="Species Name" id="sname" size="50" placeHolder="Species Name.." />
				<TextInput labelFor="pname" labelName="Planet Name" id="pname" size="50" placeHolder="Planet Earth" />
				<TextInput labelFor="num" labelName="Number Of beings" id="num" size="50" placeHolder="How many.." />
				
				<p>
					<label htmlFor="notRobot">What is 2+2?</label>
					<select name="notRobot" id="notRobot">
						<option value="notFour">Not 4</option>
						<option value="four">4</option>
					</select>
					<span id="warning"></span>
				</p>
				<p>
					<label htmlFor="reason">Reason for sparing</label>
					<textarea id="reason" name="reason" row="4" cols="50" placeholder="Why..??" />
					<span id="warning"></span>
				</p>
				<input type="submit" value="Submit" />
			</form>
		</section>
	);
};

export default W12MForm;
