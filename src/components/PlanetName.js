import { useState } from 'react';
import validate from '../validation';

function PlanetName({ planetName, onChangePlanetName }) {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section>
            <p>
                <label htmlFor="planetName">Planet Name : </label>
                <input type="text"
                    id="planetName"
                    name="planetName"
                    size="50"
                    placeholder="Planet Name.."
                    value={planetName}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value, e.target.id);
                        setErrorMessage(errorMessage);
                        onChangePlanetName(e);
                    }
                    }
                />
            </p>
            <p data-testid="warning"> {errorMessage} </p>
        </section>
    )
}

export default PlanetName