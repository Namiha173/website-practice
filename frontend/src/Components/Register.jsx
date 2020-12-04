import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

function Register() {
  const fetchData = async (e) => {
    let response = await fetch(`http://localhost:8000/register`, {
      method: "POST",

      // Adding body or contents to send
      // body: JSON.stringify({
      //   userName: e.UserName,
      //   Email: e.Email,
      //   Password: e.Password,
      //   PhoneNo: e.PhoneNo,
      //   image: "heloooo",
      // }),
      body: JSON.stringify(e),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    console.log(data);
  };

  const yup = require("yup");
  const validate = yup.object().shape({
    UserName: yup
      .string()
      .min(4, "Enter more than 4 char")
      .max(255, "Maxlength is 255")
      .required("UserName is Required"),
    Email: yup
      .string()
      .email("Pattern is Invalid")
      .required("Email is Required"),
    Password: yup
      .string()
      .min(8, "Enter more than 8 char")
      .required("Password is Required"),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords must match")

      .required("Password is Required"),
    PhoneNo: yup
      .number()
      .min(10, "PhoneNo is of 10 char")
      //   .max(10, "PhoneNo is of 10 char")
      .required("PhoneNo is Required"),
  });

  return (
    <div className="Register-container">
      <Formik
        initialValues={{
          UserName: "",
          Email: "",
          Password: "",
          ConfirmPassword: "",
          PhoneNo: "",
        }}
        onSubmit={(e) => fetchData(e)}
        validationSchema={validate}
      >
        {({
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
        }) => (
          <Form noValidate autoComplete="off" className="Register-form">
            <img src={logo} alt="Logo" className="Register-img" />
            <h1 className="Register-header">SIGN UP</h1>
            <br />
            <TextField
              error={errors.UserName && touched.UserName}
              helperText={touched.UserName && errors.UserName}
              name="UserName"
              type="text"
              label="Enter Username"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              className="Register-username"
            />
            <br />
            <br />
            {/* <ErrorMessage name="UserName" />
            <br /> */}
            <TextField
              error={errors.Email && touched.Email}
              helperText={touched.Email && errors.Email}
              name="Email"
              type="email"
              label="Enter Email"
              variant="outlined"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              className="Register-email"
            />
            <br />
            {/* /* <ErrorMessage name="Email" /> */}
            <br />
            <br />
            <TextField
              error={errors.Password && touched.Password}
              helperText={touched.Password && errors.Password}
              name="Password"
              type="password"
              label="Enter Password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              className="Register-password"
            />
            <br />
            {/* <ErrorMessage name="Password" />  */}
            <br />
            <br />
            <TextField
              error={errors.ConfirmPassword && touched.ConfirmPassword}
              helperText={touched.ConfirmPassword && errors.ConfirmPassword}
              name="ConfirmPassword"
              type="password"
              label=" Enter ConfirmPassword"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              className="Register-confirmpassword"
            />
            <br />
            <br />
            {/* /* <ErrorMessage name="ConfirmPassword" /> */}
            <br />
            <br />
            <TextField
              error={errors.PhoneNo && touched.PhoneNo}
              helperText={touched.PhoneNo && errors.PhoneNo}
              name="PhoneNo"
              type="text"
              label="Enter PhoneNo"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              className="Register-phoneno"
            />
            <br />
            {/* <ErrorMessage name="PhoneNo" /> */}
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              // color="primary"
              className="Register-button"
            >
              Submit
            </Button>
            <NavLink to="/Login" className="msg-link">
              Already registered? click here to login
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
