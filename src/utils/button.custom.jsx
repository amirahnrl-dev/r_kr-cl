import React from 'react';
import './button.custom.scss';

const Button = ({ children, ...otherProps }) => (
    <button className=''{ ...otherProps }>
        { children }
    </button>
);

export default Button;