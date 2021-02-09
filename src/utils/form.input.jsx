import React from 'react';
import './form.input.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="container">
        <input 
            className="form-input"
            onChange={ handleChange }
            { ... otherProps }
        />

        {
            label ?
            <label className={`${ otherProps.value.length ? "animate" : "" } input-label`}>
                { label }
            </label> : null
        }
    </div>
);

export default FormInput;