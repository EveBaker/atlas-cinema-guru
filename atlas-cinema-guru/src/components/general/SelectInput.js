import React from 'react';
import './general.css';

const SelectInput = ({
    label,
    options,
    className,
    value,
    setValue
  }) => {
    const handleSelect = (event) => {
      setValue(event.target.value);
    };
    
    return (
        <div className={`select-input-wrapper ${className}`}>
            {label && <label>{label}</label>}
            <select value={value} onChange={handleSelect} className="select-element">
                {options.map(Option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
  }; 

  export default SelectInput;