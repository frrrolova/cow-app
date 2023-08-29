import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { NavigationBtn } from '../components/buttons/NavigationBtn'

export function Account() {
  const navigate = useNavigate()
  return (
    <>
      <header className="header">
        <h2>My Account</h2>
        <NavigationBtn text="Home" route="/" />
      </header>
      <Button variant="contained" onClick={() => navigate('/subscribe')}>
        Subcsriptions
      </Button>
    </>
  )
}
