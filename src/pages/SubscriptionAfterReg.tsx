import { NavigationBtn } from '../components/buttons/NavigationBtn'
import { SubscriptionOptions } from '../components/subscriptions/SubscriptionOptions'

export function SubscriptionAfterReg() {
  return (
    <>
      <header className="header">
        <h2>Subscribe</h2>
        <NavigationBtn text="Skip" route="/" />
      </header>
      <SubscriptionOptions />
    </>
  )
}
