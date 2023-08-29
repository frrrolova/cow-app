import { useEffect, useState } from 'react'
import { SubscriptionCard } from '../components/subscriptions/subscription-card/SubscriptionCard'
import { getAllSubscribes } from '../services/subscriptions.service'
import { SubscriptionCardData } from '../models/subscriptions-response'
import { NavigationBtn } from '../components/buttons/NavigationBtn'

export function Subscribe() {
  const [data, setData] = useState<SubscriptionCardData[]>([])
  useEffect(() => {
    getAllSubscribes().then((response) => setData(response))
  }, [])
  return (
    <form>
      <header className="header">
        <h2>Subscribe</h2>
        <NavigationBtn text="home" route="/" />
      </header>
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
