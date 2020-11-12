import React, { Component } from "react";

function ValidationMessage(props) {
  if (!props.valid) {
    return (
      <div className="alert-danger" role="alert">
        {props.message}
      </div>
    );
  }
  return null;
}

export default class Standard extends Component {
  state = {
    username: "",
    userNamevalid: false,
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    confirmPassword: "",
    confirmPasswordValid: false,
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
      confirmPasswordValid,
      passwordValid,
    } = this.state;

    this.setState({
      formValid:
        emailValid && userNamevalid && confirmPasswordValid && passwordValid,
    });
  };

  //Validate userName
  validateUserName = () => {
    const { username } = this.state;
    let userNamevalid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 6 || username.length > 15) {
      userNamevalid = false;
      errorMsg.username = "Username should be between 6 and 15 characters";
    }
    this.setState({ userNamevalid, errorMsg }, this.validateForm);
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
    const { password, confirmPassword } = this.state;
    let confirmPasswordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password === !confirmPassword) {
      confirmPasswordValid = false;
      errorMsg.confirmPassword = "Invalid Password Does not match";
    }
    this.setState({ confirmPasswordValid, errorMsg }, this.validateForm);
  };

  // Reset Form
  resetForm = () => {
    this.setState({
      ...this.state
    })
  }

  render() {
    console.log(this.state);
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
              id="username"
              value={this.state.username}
              onChange={(e) =>
                this.setState(
                  { username: e.target.value },
                  this.validateUserName
                )
              }
            />
            <span>
              <ValidationMessage
                valid={this.state.usernameValid}
                message={this.state.errorMsg.username}
              />
            </span>
          </div>
          {/* Email */}
          <div className="form-group">
            <lable htmlFor="email">Email</lable>
            <input
              type="text"
              className="form-control"
              id="email"
              value={this.state.email}
              onChange={(e) =>
                this.setState({ email: e.target.value }, this.validateEmail)
              }
            />
            <span>
              <ValidationMessage
                valid={this.state.emailValid}
                message={this.state.errorMsg.email}
              />
            </span>
          </div>
          {/*Password*/}
          <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input
              type="password"
              className="form-control"
              id="password"
              value={this.state.password}
              onChange={(e) =>
                this.setState(
                  { password: e.target.value },
                  this.validatePassword
                )
              }
            />
            <span>
              <ValidationMessage
                valid={this.state.passwordValid}
                message={this.state.errorMsg.password}
              />
            </span>
          </div>
          {/*Confirm Password */}
          <div className="form-group">
            <lable htmlFor="confirmPassword">Confirm Password</lable>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={this.state.confirmPassword}
              onChange={(e) =>
                this.setState(
                  { confirmPassword: e.target.value },
                  this.validateConfirmPassword
                )
              }
            />
            <span>
              <ValidationMessage
                valid={this.state.confirmPasswordValid}
                message={this.state.errorMsg.confirmPassword}
              />
            </span>
          </div>
          <div className="btn-group">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!this.state.formValid}
            >
              Submit
            </button>
            <button
              className="btn btn-danger"
              onClick={(this.resetForm = this.resetForm.bind(this))}
            >
              Reset
            </button>
          </div>
        </form>
        <h5>Username: {this.state.username} </h5>
        <h5>Email: {this.state.email} </h5>
        <h5>Password: {this.state.password} </h5>
        <h5>Confirm Password: {this.state.confirmPassword} </h5>
      </div>
    );
  }
}
