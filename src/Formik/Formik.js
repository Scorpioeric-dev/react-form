import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

class Formik extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isValid: false,
  };

  render() {
    return (
      <div>
        <h5>Formik w/Yup</h5>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            isSubmitting: true,
          }}
        >
          {({}) => (
            <form noValidate>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input className="form-control" type="text" name="userName" />
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Formik;
