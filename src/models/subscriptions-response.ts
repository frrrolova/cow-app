export interface Subscription {
  id: number
}
export interface SubscriptionCardData extends Subscription {
  name: string
  price: string
  access: string
  storage: string
  kitchen: string
}

