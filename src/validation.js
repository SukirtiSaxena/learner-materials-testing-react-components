
const validate = (value, id) => {
    if (id === 'speciesName') {
        if (/[^a-zA-Z -]/.test(value)) {
            return 'Invalid characters';
        }
        if (value.trim().length < 3) {
            return `Species Name needs to be at least three characters`;
        }
        if (value.trim().length > 23) {
            return `Species Name needs to be less than twenty three characters`;
        }
    }

    if (id === 'reason') {
        if (value.trim().length < 17) {
            return `Reason to Spare needs to be more than 17 letters.`;
        }
        if (value.trim().length > 153) {
            return `Reason needs to be less than 153 letters.`;
        }
    }

    if (id === 'planetName') {
        if (value.trim().length < 2) {
            return `Planet Name needs to be at least two characters`;
        }
        if (value.trim().length > 49) {
            return `Planet Name needs to be less than 49 characters`;
        }
        if (/[^a-zA-Z0-9 -]/.test(value)) {
            return 'Invalid characters';
        }
    }

    if (id === 'numberOfBeings') {
        if (/[^0-9 -]/.test(value)) {
            return 'Invalid characters. Enter only Numbers';
        }
        if (Number(value) < 1000000000) {
            return `Number of Beings needs to be at least 1,000,000,000`;
        }
    }

    if (id === 'notRobot') {
        if (value === 'Not 4') {
            return `Exterminate! Exterminate!! Exterminate!!! Answer should be 4!!`;
        }
    }
};

export default validate;
