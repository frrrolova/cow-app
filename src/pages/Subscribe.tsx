import { NavigationBtn } from '../components/buttons/NavigationBtn'
import { SubscriptionOptions } from '../components/subscriptions/SubscriptionOptions'

export function Subscribe() {
  return (
    <div>
      <header className="header">
        <h2>Subscribe</h2>
        <NavigationBtn text="home" route="/" />
      </header>
      <SubscriptionOptions />
    </div>
  )
}
