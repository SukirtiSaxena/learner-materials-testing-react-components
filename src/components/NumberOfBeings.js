import { useState } from 'react';

function NumberOfBeings({ numberOfBeings, onChangeNumberOfBeings }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => {
        if (value.trim() === '') {
            return `Number of Beings is required`;
        }
        if (/[^0-9 -]/.test(value)) {
            return 'Invalid characters. Enter only Numbers';
        }
        if (value < 1000000000) {
            return `Number of Beings needs to be at least  1,000,000,000`;
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
            <p id="warning"> {errorMessage} </p>
        </section>
    )
}

export default NumberOfBeings