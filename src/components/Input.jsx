import React, { Fragment } from "react";
import "../styles/Input.scss";

const Input = ({ type, placeholder, name, onChange, value }) => {
  return (
    <Fragment>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className="input"
        required
        minlength="5"
      />
    </Fragment>
  );
};

export default Input;
