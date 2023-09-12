import { useEffect, useState } from 'react'
import { SubscriptionCardData } from '../../models/subscriptions-response'
import { SubscriptionCard } from './subscription-card/SubscriptionCard'
import { getAllSubscribes, saveSubscription } from '../../services/subscriptions.service'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function SubscriptionOptions() {
  const [data, setData] = useState<SubscriptionCardData[]>([])
  useEffect(() => {
    getAllSubscribes().then((response) => setData(response))
  }, [])

  const [selectedSubscription, setSelectedSubscription] = useState<SubscriptionCardData | null>(null)

  const navigate = useNavigate()

  return (
    <>
      <div className="subscribe-options">
        <div className="subscribe-options__container">
          {data.map((item: SubscriptionCardData) => (
            <SubscriptionCard
              key={item.id}
              subscription={item}
              isSelected={item === selectedSubscription}
              onClick={(subscription) => {
                item === selectedSubscription ? setSelectedSubscription(null) : setSelectedSubscription(subscription)
              }} />
          ))}
        </div>
      </div>
      <div className="subcribe-btns-container">
        <Button
          type='button'
          size="large"
          variant="contained"
          className="subscribe-btn"
          disabled={selectedSubscription ? false : true}
          onClick={() => {
            if (selectedSubscription) {
              saveSubscription(selectedSubscription).then(() => navigate('/checkout'))
            }
          }}
        >
          Next
        </Button>
      </div>
    </>
  )
}
