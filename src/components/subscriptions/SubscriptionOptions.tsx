import { useEffect, useState } from 'react'
import { SubscriptionCardData } from '../../models/subscriptions-response'
import { SubscriptionCard } from './subscription-card/SubscriptionCard'
import { getAllSubscribes } from '../../services/subscriptions.service'
import { Button } from '@mui/material'

export function SubscriptionOptions() {
  const [data, setData] = useState<SubscriptionCardData[]>([])
  useEffect(() => {
    getAllSubscribes().then((response) => setData(response))
  }, [])
  return (
    <>
      <div className="subscribe-options">
        <div className="subscribe-options__container">
          {data.map((item: SubscriptionCardData) => (
            <SubscriptionCard key={item.id} subscription={item} />
          ))}
        </div>
      </div>
      <div className="subcribe-btns-container">
        <Button size="large" variant="contained" className="subscribe-btn">
          Next
        </Button>
      </div>
    </>
  )
}
