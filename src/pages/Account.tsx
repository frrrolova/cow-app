import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function Account() {
  const navigate = useNavigate()
  return (
    <>
      <h2>My Account</h2>
      <Button variant="contained" onClick={() => navigate('/subscribe')}>
        Subcsribes
      </Button>
    </>
  )
}
