import { useState } from 'react';
import validate from '../validation';

function NumberOfBeings({ numberOfBeings, onChangeNumberOfBeings }) {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section>
            <p>
                <label htmlFor="NumberOfBeings">Number Of Beings : </label>
                <input type="text"
                    id="numberOfBeings"
                    name="numberOfBeings"
                    size="50"
                    placeholder="Number Of Beings.."
                    value={numberOfBeings}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value, e.target.id);
                        setErrorMessage(errorMessage);
                        onChangeNumberOfBeings(e);
                    }
                    }
                />
            </p>
            <p data-testid="warning"> {errorMessage} </p>
        </section>
    )
}

export default NumberOfBeings