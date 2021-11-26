import { useState } from 'react';

function SpeciesName({ speciesName, onChangeSpeciesName }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => {
        if (value.trim() === '') {
            return `Species Name is required`;
        }
        if (/[^a-zA-Z -]/.test(value)) {
            return 'Invalid characters';
        }
        if (value.trim().length < 3) {
            return `Species Name needs to be at least three characters`;
        }
        if (value.trim().length > 23) {
            return `Species Name needs to be less than twenty three characters`;
        }
    }

    return (
        <section>
            <p>
                <label htmlFor="speciesName">Species Name : </label>
                <input type="text"
                    id="speciesName"
                    name="speciesName"
                    size="50"
                    placeholder="Species Name.."
                    value={speciesName}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangeSpeciesName(e);
                    }
                    }
                />
            </p>
            <p id="warning"> {errorMessage} </p>
        </section>
    )
}
export default SpeciesName