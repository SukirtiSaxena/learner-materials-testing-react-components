import { useState } from 'react';
import validate from '../validation';

function SpeciesName({ speciesName, onChangeSpeciesName }) {
    const [errorMessage, setErrorMessage] = useState('');

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
                        const errorMessage = validate(e.target.value, e.target.id);
                        setErrorMessage(errorMessage);
                        onChangeSpeciesName(e);
                    }
                    }
                />
            </p>
            <p data-testid="warning"> {errorMessage} </p>
        </section>
    )
}
export default SpeciesName