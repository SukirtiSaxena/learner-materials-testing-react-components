import { useState } from 'react';

function NumberOfBeings({ numberOfBeings, onChangeNumberOfBeings }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => {
        if (/[^0-9 -]/.test(value)) {
            return 'Invalid characters. Enter only Numbers';
        }

        if (value < 1000000000) {
            return `Number of Being needs to be at least  1,000,000,000`;
        }
    }
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
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangeNumberOfBeings(e);
                    }
                    }
                />
            </p>
            <error id="warning"> {errorMessage} </error>
        </section>
    )
}

export default NumberOfBeings