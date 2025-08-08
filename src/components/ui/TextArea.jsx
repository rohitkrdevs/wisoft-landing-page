import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  rows = 4,
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const [textValue, setTextValue] = useState(value);

  const handleChange = (e) => {
    setTextValue(e?.target?.value);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'font-lato font-normal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-7 focus:border-transparent resize-vertical';
  
  const textareaClasses = `
    ${baseClasses}
    bg-form-1
    text-form-2
    border-form-1
    border
    rounded-[6px]
    pt-[16px] pb-[10px] px-[18px] sm:pt-[20px] sm:pb-[12px] sm:px-[24px]
    text-[14px] sm:text-[16px]
    leading-[16px] sm:leading-[20px]
    placeholder-form-2
    ${fullWidth ? 'w-full' : 'w-[92%]'}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');

  return (
    <textarea
      placeholder={placeholder}
      value={textValue}
      onChange={handleChange}
      rows={rows}
      disabled={disabled}
      className={textareaClasses}
      {...props}
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  rows: PropTypes?.number,
  disabled: PropTypes?.bool,
  fullWidth: PropTypes?.bool,
  className: PropTypes?.string,
};

export default TextArea;