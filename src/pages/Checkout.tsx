import { Card } from '../components/card/Card'

export function Checkout() {
  return (
    <>
      <header className="header">
        <h2>Checkout</h2>
      </header>
      <div className="checkout">
        <div className="checkout-info"></div>
        <div className="checkout-payment">
          <Card />
        </div>
      </div>
    </>
  )
}
