import { useEffect, useState } from 'react'
import { Card } from '../components/card/Card'
import { SubscriptionCard } from '../components/subscriptions/subscription-card/SubscriptionCard'
import { SubscriptionCardData } from '../models/subscriptions-response'
import { getSavedId, getSubscriptionData } from '../services/subscriptions.service'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionCardData>()
  const navigate = useNavigate()
  useEffect(() => {
    getSavedId().then((response) => {
      response.id
        ? getSubscriptionData(response.id).then((resp) => setSubscriptionData(resp))
        : navigate('/subscribe')
    })
  }, [])
  return (
    <>
      <header className="header">
        <h2>Checkout</h2>
      </header>
      {subscriptionData && <div className="checkout">
        <div className="checkout-info">
          <SubscriptionCard subscription={subscriptionData}/>
        </div>
        <div className="checkout-payment">
          <Card />
        </div>
      </div>}
    </>
  )
}
