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
    errorMsg: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //Validate Form
  validateForm = () => {
    const {
      emailValid,
      userNamevalid,
      passwordConfirmValid,
      passwordValid,
    } = this.state;

    this.setState({
      formValid:
        emailValid && userNamevalid && passwordConfirmValid && passwordValid,
    });
  };

  //Validate userName
  validateUserName = () => {
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 6 || username.length > 15) {
      usernameValid = false;
      errorMsg.email = "Username should be between 6 and 15 characters";
    }
    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  //validate the Email

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (!/^[^\s@]+@[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = "Invalid Email format";
    }
    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  //Password Validation
  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password.length < 8) {
      passwordValid = false;
      errorMsg.password = "Invalid  Password";
    }
    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  //confirm password
  validateConfirmPassword = () => {
    const { password, passwordConfirm } = this.state;
    let passwordConfirmValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password === !passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.password = "Invalid Password Does not match";
    }
    this.setState({ passwordConfirmValid, errorMsg }, this.validateForm);
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
            <span></span>
          </div>
          {/* Email */}
          <div className="form-group">
            <lable htmlFor="email">Email</lable>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          {/*Password*/}
          <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          {/*Confirm Password */}
          <div className="form-group">
            <lable htmlFor="confirmPassword">Confirm Password</lable>
            <input
              type="password"
              className="form-control"
              name="passwordConfirm"
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
