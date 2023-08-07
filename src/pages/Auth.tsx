import { TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

export function Auth() {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => console.log(values),
  })

  const blurHandler = useCallback(
    (e: React.FocusEvent<HTMLInputElement>, fieldName: string) => {
      formik.handleBlur(e)
      formik.setFieldValue(
        fieldName,
        formik.values[fieldName as keyof typeof formik.values].trim()
      )
    },
    [formik]
  )

  return (
    <div className="auth-container">
      <Button variant="outlined" size="small" className="screen-change-btn">
        <Link to="/register">Create account</Link>
      </Button>
      <form>
        <h2>LOG IN</h2>
        <TextField
          id="outlined-basic"
          name="email"
          label="E-mail"
          variant="outlined"
          fullWidth
          margin="dense"
          value={formik.values.email}
          required
          onChange={formik.handleChange}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            blurHandler(e, 'email')
          }}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          id="outlined-basic"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <Button variant="contained" className="form-btn" type="submit">
          Log In
        </Button>
      </form>
    </div>
  )
}
