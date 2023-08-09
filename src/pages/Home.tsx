import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../models/user'
import { logout } from '../services/auth.service'

export function Home() {
  const [user, setUser] = useState<User>()
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = localStorage.getItem('user')
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  function logoutHandler() {
    logout()
    setUser(undefined)
  }

  return (
    <>
      <h1>Home</h1>
      {!user && (
        <Button variant="outlined" size="small">
          <Link to="/register">Create account</Link>
        </Button>
      )}{' '}
      <Button
        variant="outlined"
        size="small"
        onClick={() => (user ? logoutHandler() : navigate('/auth'))}
      >
        {user ? 'Log Out' : 'Log in'}
      </Button>
    </>
  )
}
