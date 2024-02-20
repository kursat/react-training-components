import React from 'react';

const Button = ({ text, customClass, onPress }) => {
    const classes = `${customClass} border-2 border-blue-800 px-2 bg-blue-600 rounded text-white`;

    return (
        <button onClick={onPress} className={classes}>
            {text}
        </button>
    );
};

export default Button;
