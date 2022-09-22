import React from 'react';
const Button = ({id, text, className, type, value, onClick}) => {
    return (
        <>
            <button type={type} id={id} className={className} value={value} onClick={onClick}>
                {text}
            </button>
        </>
    );
}

export default Button;