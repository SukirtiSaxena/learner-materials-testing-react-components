import { useState } from 'react';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />

			<form>
				<p>
					<label htmlFor="sname">Species Name : </label>
					<input type="text" id="sname" name="sname" size="50" placeholder="Species Name.." />
					<p class="warningName" id="warning">Warning!</p>
				</p>
				<p>
					<label htmlFor="pname">Planet Name : </label>
					<input type="text" id="pname" name="pname" defaultValue="Earth" size="50" placeholder="species.." />
					<p class="warningPlanet" id="warning">Warning!</p>
				</p>
				<p>
					<label htmlFor="num">Number Of beings : </label>
					<input type="text" id="num" name="num" size="50" placeholder="How many.." />
					<p class="warningNum" id="warning">Warning!</p>
				</p>
				<p>
					<label htmlFor="notRobot">What is 2+2? </label>
					<input type="text" id="notRobot" name="notRobot" size="50" placeholder="2 + 2 is .." />
					<p class="warningNotRobot" id="warning">Warning!</p>
				</p>
				<p>
					<label htmlFor="reason">Reason for sparing : </label>
					<textarea id="reason" name="reason" rows="4" cols="50" placeholder="Why..??" />
					<p class="warningReason" id="warning">Warning!</p>
				</p>
				<input type="submit" value="Submit" />
			</form>
		</section>
	);
};

export default W12MForm;
