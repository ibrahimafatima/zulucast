import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateInput(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ error, data });
  };

  validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  renderInput(type, name, placeholder, label, icon) {
    const { data, error } = this.state;
    return (
      <Input
        name={name}
        type={type}
        label={label}
        icon={icon}
        value={data[name]}
        error={error[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }

  renderButton(label) {
    return (
      <div className="mt-3 d-block">
        <button
          type="submit"
          style={{ backgroundColor: "#d02b87" }}
          className={`btn btn-primary btn-lg w-100 ${
            this.validate() && "disabled"
          }`}
        >
          {label}
        </button>
      </div>
    );
  }

  render() {
    return;
  }
}

export default Form;
