import { useState } from 'react';

function PlanetName({ planetName, onChangePlanetName }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => {
        if (value.trim() === '') {
            return `Planet Name is required`;
        }
        if (value.trim().length < 2) {
            return `Species Name needs to be at least two characters`;
        }
        if (value.trim().length > 49) {
            return `Species Name needs to be less than 49 characters`;
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
            <error id="warning"> {errorMessage} </error>
        </section>
    )
}

export default PlanetName