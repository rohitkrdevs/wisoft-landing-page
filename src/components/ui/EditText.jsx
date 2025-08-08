import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e?.target?.value);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'font-lato font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-7 focus:border-transparent';
  
  const inputClasses = `
    ${baseClasses}
    bg-form-1
    text-form-1
    border-form-1
    border
    rounded-[6px]
    pt-[14px] pb-[14px] px-[18px] sm:pt-[18px] sm:pb-[18px] sm:px-[24px]
    text-[14px] sm:text-[16px]
    leading-[16px] sm:leading-[20px]
    placeholder-form-2
    ${fullWidth ? 'w-full' : 'w-[92%]'}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

EditText.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  type: PropTypes?.string,
  disabled: PropTypes?.bool,
  fullWidth: PropTypes?.bool,
  className: PropTypes?.string,
};

export default EditText;