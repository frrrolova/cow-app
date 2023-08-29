import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth.hook'
import { NavigationBtn } from '../components/buttons/NavigationBtn'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

export function Home() {
  const navigate = useNavigate()

  const { user, logOut } = useAuth()

  return (
    <>
      <header className="header">
        <h1>Home</h1>
        <nav className="navigation">
          {!user && <NavigationBtn text="Create account" route="/register" />}{' '}
          {user && (
            <NavigationBtn
              text="Account"
              route="/account"
              icon={<PersonOutlineOutlinedIcon />}
            />
          )}
          <Button
            variant="outlined"
            size="small"
            startIcon={user ? <LogoutOutlinedIcon /> : <LoginOutlinedIcon />}
            onClick={() => (user ? logOut() : navigate('/auth'))}
            className="home-nav-btn"
          >
            {user ? 'Log Out' : 'Log in'}
          </Button>
        </nav>
      </header>
    </>
  )
}
