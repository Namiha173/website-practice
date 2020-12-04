import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import { validate } from "../validation/validate";
import CssTextField from "./../validation/textStyle";

function Register() {
  const classes = CssTextField();
  return (
    <div className="Register-Container">
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
            <h1 className="Sign-Up">Sign Up</h1>
            <TextField
              error={touched.userName && errors.userName ? true : false}
              helperText={touched.userName && errors.userName}
              label="Username"
              type="text"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.userName && touched.userName
                  ? classes.error
                  : classes.input
              }
              InputProps={{
                classes: {
                  root: classes.input,
                },
              }}
            />

            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email ? true : false}
              helperText={touched.email && errors.email}
              className={
                errors.email && touched.email ? classes.error : classes.input
              }
              InputProps={{
                classes: {
                  root: classes.input,
                },
              }}
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password ? true : false}
              helperText={touched.password && errors.password}
              className={
                errors.password && touched.password
                  ? classes.error
                  : classes.input
              }
              InputProps={{
                classes: {
                  root: classes.input,
                },
              }}
              autoComplete="off"
            />
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.confirmPassword && touched.confirmPassword ? true : false
              }
              helperText={touched.confirmPassword && errors.confirmPassword}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? classes.error
                  : classes.input
              }
              InputProps={{
                classes: {
                  root: classes.input,
                },
              }}
              autoComplete="off"
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
