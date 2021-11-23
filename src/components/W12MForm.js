import { useState } from 'react';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />

			<form>
				<SpeciesName />
				<PlanetName />
				<NumberOfBeings />
				
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
