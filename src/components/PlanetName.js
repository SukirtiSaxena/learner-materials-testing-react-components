import { useState } from 'react';

function PlanetName({ planetName, onChangePlanetName }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => {
        if (value.trim().length < 2) {
            return `Planet Name needs to be at least two characters`;
        }
        if (value.trim().length > 49) {
            return `Planet Name needs to be less than 49 characters`;
        }
        if (/[^a-zA-Z0-9 -]/.test(value)) {
            return 'Invalid characters';
        }
    }

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
                        const errorMessage = validate(e.target.value);
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