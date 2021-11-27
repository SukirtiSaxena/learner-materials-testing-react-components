import { useState } from 'react';
import validate from '../validation';

function Input({label,id,placeholder, name, onChangeName }) {
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
                    value={name}
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value, e.target.id);
                        setErrorMessage(errorMessage);
                        onChangeName(e);
                    }
                    }
                />
            </p>
            <p data-testid="warning"> {errorMessage} </p>
        </section>
    )
}
export default Input