import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

function Login() {
  const yup = require("yup");
  const validate = yup.object().shape({
    UserName: yup.string().label("Username").min(4).required(),
    Password: yup.string().label("Password").min(8).required(),
  });

  return (
    <div className="login-container">
      <Formik
        initialValues={{ UserName: "", Password: "" }}
        onSubmit={(a) => console.log(a)}
        validationSchema={validate}
      >
        {({ touched, errors, handleChange, handleBlur }) => (
          <Form noValidate autoComplete="off" className="login-form">
            <img src={logo} alt="Logo" className="login-img" />
            <h1 className="login-header">LOG IN</h1>
            <br />
            <TextField
              className="login-user"
              error={errors.UserName && touched.UserName}
              helperText={touched.UserName && errors.UserName}
              name="UserName"
              type="text"
              label="username"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />

            <TextField
              className="login-password"
              error={errors.Password && touched.Password}
              helperText={touched.Password && errors.Password}
              name="Password"
              type="password"
              label="password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <Button className="button-form" type="submit" variant="contained">
              Login
            </Button>
            <NavLink to="/Register" className="msg-link">
              New user? click here to register
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
