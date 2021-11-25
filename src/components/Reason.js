import { useState } from 'react';

function Reason({ reason, onChangeReason }) {
    const [errorMessage, setErrorMessage] = useState('');
    const validate = (value) => {
        if (value.trim() === '') {
            return `Reason is required`;
        }
        if (value.trim().length < 17) {
            return `Species Name needs to be more than 17`;
        }
        if (value.trim().length > 153) {
            return `Species Name needs to be less than 153`;
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
            <error id="warning"> {errorMessage} </error>
        </section>
    )
}

export default Reason