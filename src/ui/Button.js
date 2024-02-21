import React from 'react';
import style from './Button.module.css';

const Button = ({ text, customClass, onPress }) => {
    console.log('style', style);

    const classes = `mt-45 ${style.container} ${customClass} border-2 border-blue-800 px-2 bg-blue-600 rounded text-white`;

    return (
        <button onClick={onPress} className={classes}>
            {text}
        </button>
    );
};

export default Button;
