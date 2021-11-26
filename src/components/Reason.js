import { useState } from 'react';
import validate from '../validation';

function Reason({ reason, onChangeReason }) {
    const [errorMessage, setErrorMessage] = useState('');

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
                        const errorMessage = validate(e.target.value, e.target.id);
                        setErrorMessage(errorMessage);
                        onChangeReason(e);
                    }
                    }
                />
            </p>
            <p data-testid="warning"> {errorMessage} </p>
        </section>
    )
}

export default Reason