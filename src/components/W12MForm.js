import { useState } from 'react';
import W12MHeader from './W12MHeader';
import CheckIfRobot from './CheckIfRobot';
import Reason from './Reason';
import Input from './Input';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('Earth');
	const [numberOfBeings, setNumberOfBeings] = useState('1000000000');
	const [checkIfRobot, setCheckIfRobot] = useState('4');
	const [reason, setReason] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		setMessage(`Thank you ${speciesName} from ${planetName} for your Form Submission. 
				You are ${numberOfBeings} in number and you said 2+2 is ${checkIfRobot}.
				Your reason for sparing is ${reason}.`);
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form data-testid="form" onSubmit={handleSubmit}>

				<Input name={speciesName}
					id="speciesName"
					label="Species Name : "
					placeholder="Species Name.."
					onChangeName={(e) => setSpeciesName(e.target.value)} />

				<Input name={planetName}
					id="planetName"
					label="Planet Name : "
					placeholder="Planet Name.."
					onChangeName={(e) => setPlanetName(e.target.value)} />


				<Input name={numberOfBeings}
					id="numberOfBeings"
					label="Number Of Beings : "
					placeholder="Number Of Beings.."
					onChangeName={(e) => setNumberOfBeings(e.target.value)} />


				<CheckIfRobot checkIfRobot={checkIfRobot}
					onChangecheckIfRobot={(e) => setCheckIfRobot(e.target.value)} />

				<Reason reason={reason}
					onChangeReason={(e) => setReason(e.target.value)} />

				<button type="submit">Submit</button>
			</form>

			<p>
				{message}
			</p>
		</section>
	);
};

export default W12MForm;
