import { TextField, Button, Alert } from '@mui/material'
import { useFormik } from 'formik'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { UserLoginData } from '../models/user'
// import { logIn } from '../services/auth.service'
import { useAuth } from '../hooks/auth.hook'
import { NavigationBtn } from '../components/buttons/NavigationBtn'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

export function Auth() {
  const navigate = useNavigate()
  const [isLoginError, setIsLoginError] = useState<boolean>(false)
  const { logIn } = useAuth()

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const data: UserLoginData = {
        email: values.email,
        password: values.password,
      }
      setIsLoginError(false)
      logIn(data)
        .then(() => {
          navigate('/')
        })
        .catch(() => setIsLoginError(true))
    },
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
    <>
      <header className="header header--auth">
        <div className="navigation">
          <NavigationBtn text="Home" route="/" icon={<HomeOutlinedIcon />} />
          <NavigationBtn text="Registration" route="/register" />
        </div>
      </header>
      <div className="auth-container">
        {/* <Button variant="outlined" size="small" className="screen-change-btn">
        <Link to="/register">Create account</Link>
      </Button> */}
        <form onSubmit={formik.handleSubmit}>
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
            onChange={(event) => {
              formik.handleChange(event)
              setIsLoginError(false)
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              blurHandler(e, 'email')
            }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            onChange={(event) => {
              formik.handleChange(event)
              setIsLoginError(false)
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {isLoginError && (
            <Alert severity="error" variant="outlined">
              Incorrect e-mail or password
            </Alert>
          )}
          <Button variant="contained" className="form-btn" type="submit">
            Log In
          </Button>
        </form>
      </div>
    </>
  )
}
