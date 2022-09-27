import React from "react";

const Input = ({
  id,
  name,
  className,
  value,
  type,
  placeholder,
  titleLabel,
  label,
  autoComplete,
  onChange,
  disabled,
  readOnly,
  inputMode,
  onBlur
}) => {
  return (
    <>
      <div className="form-group">
        <label className={titleLabel} htmlFor={id}>
          {label}
        </label>
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
          readOnly={readOnly}
          disabled={disabled}
          inputMode={inputMode}
          onBlur={onBlur}
        />
      </div>
    </>
  );
};

export default Input;
