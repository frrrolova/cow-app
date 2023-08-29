import { NavigationBtn } from '../components/buttons/NavigationBtn'
import { SubscriptionOptions } from '../components/subscriptions/SubscriptionOptions'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

export function Subscribe() {
  return (
    <div>
      <header className="header">
        <h2>Subscribe</h2>
        <NavigationBtn text="home" route="/" icon={<HomeOutlinedIcon />} />
      </header>
      <SubscriptionOptions />
    </div>
  )
}
