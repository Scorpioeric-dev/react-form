import React, { Component } from "react";

export default class Standard extends Component {
  state = {
    username: "",
    userNamevalid: false,
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    passwordConfirm: "",
    passwordConfirmValid: false,
    formValid: false,
    errorMessage: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  render() {
    return (
      <div>
        <h5>Standard-Form</h5>
        <form>
          {/* Username */}
          <div className="form-group">
            <lable htmlFor="username">Username</lable>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="username"
              onChange={this.handleChange}
            />
          </div>
          {/* Email */}
          <div className="form-group">
            <lable htmlFor="email">Email</lable>
            <input
              type="text"
              className="form-control"
              id="email"
              value={this.state.email}
            />
          </div>
          {/*Password*/}
          <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input
              type="password"
              className="form-control"
              id="password"
              value={this.state.password}
            />
          </div>
          {/*Confirm Password */}
          <div className="form-group">
            <lable htmlFor="confirmPassword">Confirm Password</lable>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={this.state.passwordConfirm}
            />
          </div>
        </form>
      </div>
    );
  }
}
