import { AxiosResponse } from 'axios'
import { http } from '../http'
import { SubscriptionCardData } from '../models/subscriptions-response'

export function getAllSubscribes(): Promise<SubscriptionCardData[]> {
  return http
    .get('/subscriptions')
    .then((response: AxiosResponse<SubscriptionCardData[]>) => response.data)
}
