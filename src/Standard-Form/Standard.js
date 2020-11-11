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
    errorMsh: {},
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
              onChange={this.handleChange}
            />
          </div>
          {/* Email */}
          <div className="form-group">
            <lable htmlFor="email">Email</lable>
            <input
              type="text"
              className="form-control"
              
              name='email'
              onChange={this.handleChange}
            />
          </div>
          {/*Password*/}
          <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input
              type="password"
              className="form-control"
              
              name='password'
              onChange={this.handleChange}
            />
          </div>
          {/*Confirm Password */}
          <div className="form-group">
            <lable htmlFor="confirmPassword">Confirm Password</lable>
            <input
              type="password"
              className="form-control"
              name='passwordConfirm'
              onChange={this.handleChange}
            />
          </div>
        </form>
        <h5>Username: {this.state.username} </h5>
        <h5>Email: {this.state.email} </h5>
        <h5>Password: {this.state.password} </h5>
        <h5>Confirm Password: {this.state.passwordConfirm} </h5>
        </div>
    );
  }
}
