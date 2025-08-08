import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-global-7 text-global-6 hover:bg-global-5 disabled:bg-global-4 focus:ring-global-7',
    secondary: 'bg-global-8 text-global-1 hover:bg-global-9 disabled:bg-global-8 focus:ring-global-8',
    outline: 'border border-global-8 text-global-1 hover:bg-global-10 disabled:border-global-4 disabled:text-global-4 focus:ring-global-8',
    gradient: 'bg-[linear-gradient(151deg,#b8943e_0%,_#976621_100%)] text-global-6 hover:opacity-90 focus:ring-global-7',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
    medium: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base',
    large: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants?.[variant]} 
    ${sizes?.[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes?.node,
  onClick: PropTypes?.func,
  variant: PropTypes?.oneOf(['primary', 'secondary', 'outline', 'gradient']),
  size: PropTypes?.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes?.bool,
  type: PropTypes?.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes?.bool,
  className: PropTypes?.string,
};

export default Button;