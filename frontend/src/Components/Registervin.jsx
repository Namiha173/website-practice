import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
// import { validate } from "../validation/validate";

function Registervin() {
  const yup = require("yup");

  const validate = yup.object().shape({
    userName: yup.string().label("Username").min(4).required(),
    email: yup.string().label("Email").email().required(),
    password: yup.string().label("Password").required(),
    confirmPassword: yup
      .string()
      .label("ConfirmPassword")
      .oneOf([yup.ref("password"), null], "Passwords does not")
      .required(),
  });
  // let yup = require("yup");
  // let validate = yup.object().shape({
  // 	email: yup
  // 		.string()
  // 		.email("Please Enter in the given Format-Example@example.com")
  // 		.required(),
  // 	password: yup.string().min(8, "Enter 8 or more characters").required(),
  // });
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(e) => console.log(e)}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form noValidate autoComplete="off" className="Register-Form">
            {console.log(errors)}
            <TextField
              error={errors.userName && true}
              label="Username"
              type="text"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
			  helperText={errors.userName}
			  Dirt
            />
            <ErrorMessage name="userName" />
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && true}
              helperText={errors.email}
            />
            <ErrorMessage name="email" />

            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.password}
              error={errors.password && true}
            />
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword && true}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registervin;
