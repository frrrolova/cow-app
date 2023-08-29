import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface NavigationBtnProps {
  text: string
  route: string
}

export function NavigationBtn({ text, route }: NavigationBtnProps) {
  const navigate = useNavigate()
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        className="nav-btn"
        onClick={() => navigate(route)}
      >
        {text}
      </Button>
    </>
  )
}
