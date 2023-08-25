import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth.hook'

export function Home() {
  const navigate = useNavigate()

  const { user, logOut } = useAuth()

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
