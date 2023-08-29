import { useState } from 'react'
import checkmarkOut from '../../../assets/checkmark-outlined.svg'
import checkmark from '../../../assets/checkmark.svg'
import { SubscriptionCardData } from '../../../models/subscriptions-response'

export function SubscriptionCard({
  subscription,
}: {
  subscription: SubscriptionCardData
}) {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  return (
    <>
      <details
        className="card"
        open={isOpened}
        onClick={(e) => {
          e.preventDefault()
          isOpened ? setIsOpened(false) : setIsOpened(true)
        }}
        onBlur={(e) => {
          e.preventDefault()
          setIsOpened(false)
        }}
      >
        <summary className="card__container">
          <div className="card__title">
            <h3 className="card__name">{subscription.name}</h3>
          </div>
          <div className="card__info-item info">
            <div className="info__icon">
              <img src={checkmarkOut} alt="checkmark" />
            </div>
            <div className="info__description">
              <div className="info__title">Price</div>
              <div className="info__params">EUR {subscription.price}</div>
            </div>
          </div>
          <div className="card__info-item info">
            <div className="info__icon">
              <img src={checkmarkOut} alt="checkmark" />
            </div>
            <div className="info__description">
              <div className="info__title">Access</div>
              <div className="info__params">{subscription.access}</div>
            </div>
          </div>
          <div className="card__info-item info">
            <div className="info__icon">
              <img src={checkmarkOut} alt="checkmark" />
            </div>
            <div className="info__description">
              <div className="info__title">Storage space</div>
              <div className="info__params">{subscription.storage}</div>
            </div>
          </div>
          <div className="card__info-item info">
            <div className="info__icon">
              <img src={checkmarkOut} alt="checkmark" />
            </div>
            <div className="info__description">
              <div className="info__title">Kitchen access</div>
              <div className="info__params">{subscription.kitchen}</div>
            </div>
          </div>
        </summary>
        <div className="card__selected">
          <img src={checkmark} alt="checkmark" />
          Selected
        </div>
      </details>
    </>
  )
}
