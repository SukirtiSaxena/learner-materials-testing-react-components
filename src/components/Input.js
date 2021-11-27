import { useState } from 'react';
import validate from '../validation';

function Input({ label, id, placeholder, value, onChangeName }) {
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section>
            <p>
                <label htmlFor={id}>{label}</label>
                <input type="text"
                    id={id}
                    name={id}
                    size="50"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value, e.target.id);
                        setErrorMessage(errorMessage);
                        onChangeName(e.target.value);
                    }
                    }
                />
            </p>
            <p data-testid="warning"> {errorMessage} </p>
        </section>
    )
}
export default Input