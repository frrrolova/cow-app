import { useEffect, useState } from 'react'
import { SubscriptionCard } from './subscriptions/subscrition-card/SubscriptionCard'
import { getAllSubscribes } from '../services/subscriptions.service'
import { SubscriptionCardData } from '../models/subscriptions-response'

export function Subscribe() {
  const [data, setData] = useState<SubscriptionCardData[]>([])
  useEffect(() => {
    getAllSubscribes().then((response) => setData(response))
  }, [])
  return (
    <form>
      <h2>Subscribe</h2>
      <div className="subscribe-options">
        <div className="subscribe-options__container">
          {data.map((item: SubscriptionCardData) => (
            <SubscriptionCard key={item.id} subscription={item} />
          ))}
        </div>
      </div>
    </form>
  )
}
