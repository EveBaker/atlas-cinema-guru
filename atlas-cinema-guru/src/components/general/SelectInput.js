import React from 'react';
import './general.css';

const SelectInput = ({ label, options, value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="select-input">
      {label && <label>{label}</label>}
      <select value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
