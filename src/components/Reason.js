import { useState } from 'react';

function Reason({ reason, onChangeReason }) {
    const [errorMessage, setErrorMessage] = useState('');
    const validate = (value) => {
        if (value.trim() === '') {
            return `Reason is required`;
        }
        if (value.trim().length < 17) {
            return `Reason to Spare needs to be more than 17 letters.`;
        }
        if (value.trim().length > 153) {
            return `Reason needs to be less than 153 letters.`;
        }

    }
    return (
        <section>
            <p>
                <label htmlFor="reason">Reason for sparing</label>
                <textarea
                    id="reason"
                    name="reason"
                    row="4"
                    cols="50"
                    placeholder="Why..??"
                    value={reason}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangeReason(e);
                    }
                    }
                />
            </p>
            <p id="warning"> {errorMessage} </p>
        </section>
    )
}

export default Reason