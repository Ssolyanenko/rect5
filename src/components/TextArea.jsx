import React from "react";

const TextArea = (props) => {
  const { value, onChange, placeholder, name, label } = props;
  return (
    <div>
      <label>{label}</label>
      <textarea
        rows="7"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      ></textarea>
    </div>
  );
};

export default TextArea;