import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-[#9F5CE1] text-white px-6 py-3 text-lg rounded-full shadow-lg transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
