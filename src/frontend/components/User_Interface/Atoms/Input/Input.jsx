import React from 'react';

const Input = ({id, name, className,  value, type, placeholder, titleLabel, label, autoComplete, onChange, disabled, readonly}) => {
    return (
        <>
            <div className="form-group">
                <label className={titleLabel} htmlFor={id}>{label}</label>
                <input
                    label={label}
                    placeholder={placeholder}
                    type={type}
                    className={className}
                    name={name}
                    id={id}
                    value={value}
                    autoComplete={autoComplete}
                    onChange={(e) => onChange(e)}
                    readonly={readonly}
                    required
                />
            </div>
        </>
    );
}

export default Input;
