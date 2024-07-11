import React from 'react';
import './general.css';

const SelectInput = ({ label, options, value, onClick }) => {
  return (
    <div className="select-input">
      {label && <label>{label}</label>}
      <select value={value} onChange={onChange}>
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
