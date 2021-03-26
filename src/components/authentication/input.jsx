import React from "react";

const Input = ({ type, name, onChange, placeholder, label, icon, error }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor="">
        {label}{" "}
        {error && (
          <span
            className="input-instruction"
            style={{ color: "red", fontSize: "12px" }}
          >
            {name !== "password_confirm" && error}
          </span>
        )}
      </label>
      <div className="input-group input-group-lg mb-3">
        <input
          type={type}
          name={name}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
          aria-label="example@zulucast.com"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          <i className={icon}></i>
        </span>
      </div>
    </div>
  );
};

export default Input;
