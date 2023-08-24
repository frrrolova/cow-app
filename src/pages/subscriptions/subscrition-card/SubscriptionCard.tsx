import checkmark from '../../../assets/checkmark.svg'

interface SubscriptionCardProps {
  name: string
  price: string
  access: string
  storage: string
  kitchen: string
}

export function SubscriptionCard({
  name,
  price,
  access,
  storage,
  kitchen,
}: SubscriptionCardProps) {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__title">
          <h3 className="card__name">{name}</h3>
        </div>
        <div className="card__info-item info">
          <div className="info__icon">
            <img src={checkmark} alt="checkmark" />
          </div>
          <div className="info__description">
            <div className="info__title">Price</div>
            <div className="info__params">EUR {price}</div>
          </div>
        </div>
        <div className="card__info-item info">
          <div className="info__icon">
            <img src={checkmark} alt="checkmark" />
          </div>
          <div className="info__description">
            <div className="info__title">Access</div>
            <div className="info__params">{access}</div>
          </div>
        </div>
        <div className="card__info-item info">
          <div className="info__icon">
            <img src={checkmark} alt="checkmark" />
          </div>
          <div className="info__description">
            <div className="info__title">Storage space</div>
            <div className="info__params">{storage}</div>
          </div>
        </div>
        <div className="card__info-item info">
          <div className="info__icon">
            <img src={checkmark} alt="checkmark" />
          </div>
          <div className="info__description">
            <div className="info__title">Kitchen access</div>
            <div className="info__params">{kitchen}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
