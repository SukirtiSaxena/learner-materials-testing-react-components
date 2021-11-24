import { useState } from 'react';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import W12MHeader from './W12MHeader';
import CheckIfRobot from './CheckIfRobot';
import Reason from './Reason';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('Earth');
	const [numberOfBeings, setNumberOfBeings] = useState('1000000000');
	const [checkIfRobot, setCheckIfRobot] = useState('4');
	const [reason, setReason] = useState('');

	const handleSubmit = (event) => {
        event.preventDefault();
		console.log ("Full Input Data:", speciesName,planetName,numberOfBeings,checkIfRobot,reason)
    }

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form onSubmit={handleSubmit}>
				<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />
				<PlanetName planetName={planetName} onChangePlanetName={(e) => setPlanetName(e.target.value)} />
				<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e) => setNumberOfBeings(e.target.value)} />
				<CheckIfRobot checkIfRobot={checkIfRobot} onChangecheckIfRobot={(e) => setCheckIfRobot(e.target.value)}/>
				<Reason reason={reason} onChangeReason={(e)=> setReason(e.target.value)}/>

				<input type="submit" value="Submit" />
			</form>
		</section>
	);
};

export default W12MForm;
