import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface NavigationBtnProps {
  text: string
  route: string
  icon?: React.ReactNode
}

export function NavigationBtn({ text, route, icon }: NavigationBtnProps) {
  const navigate = useNavigate()
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        className="nav-btn"
        startIcon={icon}
        onClick={() => navigate(route)}
      >
        {text}
      </Button>
    </>
  )
}
