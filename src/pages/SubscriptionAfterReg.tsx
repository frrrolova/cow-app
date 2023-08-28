import { Button } from '@mui/material'
import { Subscribe } from './Subscribe'
import { useNavigate } from 'react-router-dom'

export function SubscriptionAfterReg() {
  const navigate = useNavigate()
  return (
    <>
      <Subscribe />

      <Button variant="outlined" size="small" onClick={() => navigate('/')}>
        Skip
      </Button>
    </>
  )
}
