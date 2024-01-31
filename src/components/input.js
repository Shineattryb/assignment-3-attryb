import React from 'react';
import './input.css';
function InputComponent({ label, placeholder, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value); // Call the onChange function with the input value
  };

  return (
    <div>
      <label className="heading">{label}</label>
      <input
        type="number"
        placeholder={placeholder}
        onChange={handleChange} className='label1'
      />
    </div>
  );
}

export default InputComponent;
