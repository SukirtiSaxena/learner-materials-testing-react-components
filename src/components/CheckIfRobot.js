import { useState } from 'react';

function CheckIfRobot({ checkIfRobot, onChangecheckIfRobot }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => {
        if (value.trim() === 'Not 4') {
            return `Exterminate!!! Exterminate!! Exterminate!`;
        }

    }

    return (
        <section>
            <p>
                <label htmlFor="notRobot">What is 2+2?</label>
                <select name="notRobot"
                    id="notRobot"
                    value={checkIfRobot}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangecheckIfRobot(e);
                    }
                    }
                >

                    <option value="Not 4">Not 4</option>
                    <option value="4">4</option>
                </select>
            </p>
            <error id="warning"> {errorMessage}  </error>
        </section>
    )
}

export default CheckIfRobot