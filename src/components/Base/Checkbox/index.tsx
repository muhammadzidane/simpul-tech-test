import React from "react";

const Checkbox: React.FC<CheckboxProps> = ({ onChange, checked, label }) => {
  const handleChange = () => {
    onChange(!checked);
  };
  return (
    <label className="checkbox">
      {label && <span>{label}</span>}
      <input onChange={handleChange} checked={checked} type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
