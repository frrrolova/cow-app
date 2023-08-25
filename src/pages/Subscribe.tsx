import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { SubscriptionCard } from './subscriptions/subscrition-card/SubscriptionCard'

export function Subscribe() {
  const navigate = useNavigate()
  return (
    <form>
      <h2>Subscribe</h2>
      <div className="subscribe-options">
        <div className="subscribe-options__container">
          <SubscriptionCard
            name="Daily Pass"
            price="10"
            access="8-20h"
            storage="no"
            kitchen="yes"
          />
          <SubscriptionCard
            name="Monthly Pass"
            price="100"
            access="0-24h"
            storage="yes"
            kitchen="yes"
          />

          <SubscriptionCard
            name="Hourly"
            price="5"
            access="8-20h"
            storage="no"
            kitchen="yes"
          />
        </div>
      </div>
      <Button variant="outlined" size="small" onClick={() => navigate('/')}>
        Skip
      </Button>
    </form>
  )
}
