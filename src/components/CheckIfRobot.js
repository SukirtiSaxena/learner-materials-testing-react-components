import { useState } from 'react';

function CheckIfRobot({ checkIfRobot, onChangecheckIfRobot }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (value) => {
        if (value === 'Not 4') {
            return `Exterminate! Exterminate!! Exterminate!!! Answer should be 4!!`;
        }
    }

    return (
        <section>
            <p>
                <label htmlFor="notRobot">What is 2+2?</label>
                <select name="notRobot"
                    id="notRobot"
                    data-testid="notRobot"
                    value={checkIfRobot}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangecheckIfRobot(e);
                    }
                    }
                >

                    <option value="Not 4" data-testid="opt1">Not 4</option>
                    <option value="4" data-testid="opt2">4</option>
                </select>
            </p>
            <p data-testid="warning"> {errorMessage}  </p>
        </section>
    )
}

export default CheckIfRobot