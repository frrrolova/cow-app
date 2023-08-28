import { TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useCallback, useState } from 'react'
import * as yup from 'yup'
import { UserRegistrationData } from '../models/user'
// import { register } from '../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth.hook'

export function Register() {
  // const nameInputRef = useRef<HTMLInputElement>()
  const [isRegistering, setIsRegistering] = useState<boolean>(false)
  const navigate = useNavigate()
  const { register } = useAuth()

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Name should be of minimum 2 characters length')
      .max(50, 'Name should be of maximum 50 characters length'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(/^\+[\d]{10,15}$/),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    confirmPassword: yup.string().test({
      name: 'matchPassword',
      exclusive: false,
      message: 'Password should match',
      test: (value, context) => context.parent.password === value,
    }),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setIsRegistering(true)
      const data: UserRegistrationData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      }
      register(data)
        .then(() => {
          navigate('/join')
        })
        .finally(() => setIsRegistering(false))
    },
  })

  console.log(formik)

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

  // const emailHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value)
  // }, [])

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>REGISTRATION</h2>
        <TextField
          id="outlined-basic"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="dense"
          required
          value={formik.values.name}
          // inputRef={nameInputRef}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
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
          name="phone"
          label="Phone number"
          variant="outlined"
          fullWidth
          margin="dense"
          required
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
        />
        <TextField
          id="outlined-basic"
          name="password"
          label="Create Password"
          variant="outlined"
          fullWidth
          margin="dense"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <TextField
          id="outlined-basic"
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="dense"
          required
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
        />
        <Button
          variant="contained"
          className="form-btn"
          type="submit"
          disabled={isRegistering}
        >
          Create account
        </Button>
      </form>
    </div>
  )
}
