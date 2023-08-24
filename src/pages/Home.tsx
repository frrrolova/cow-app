import { Button } from '@mui/material'
// import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { User } from '../models/user'
// import { logOut } from '../services/auth.service'
import { useAuth } from '../hooks/auth.hook'

export function Home() {
  // const [user, setUser] = useState<User>()
  const navigate = useNavigate()

  // useEffect(() => {
  //   const currentUser = localStorage.getItem('user')
  //   if (currentUser) {
  //     setUser(JSON.parse(currentUser))
  //   }
  // }, [])

  const { user, logOut } = useAuth()

  // function logoutHandler() {
  //   logOut()
  //   // setUser(undefined)
  // }

  return (
    <>
      <h1>Home</h1>
      {!user && (
        <Button variant="outlined" size="small">
          <Link to="/register">Create account</Link>
        </Button>
      )}{' '}
      {user && (
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate('/account')}
        >
          Account
        </Button>
      )}
      <Button
        variant="outlined"
        size="small"
        onClick={() => (user ? logOut() : navigate('/auth'))}
      >
        {user ? 'Log Out' : 'Log in'}
      </Button>
    </>
  )
}
