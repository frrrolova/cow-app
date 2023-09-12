import { AxiosResponse } from 'axios'
import { http } from '../http'
import { Subscription, SubscriptionCardData } from '../models/subscriptions-response'

export function getAllSubscribes(): Promise<SubscriptionCardData[]> {
  return http
    .get('/subscriptions')
    .then((response: AxiosResponse<SubscriptionCardData[]>) => response.data)
}

export function saveSubscription(data: Subscription): Promise<void> {
  return http.post('/selectedSubscription', data).then(() => {return})
}

export function getSavedId(): Promise<Subscription> {
  return http
    .get('/selectedSubscription')
    .then((response: AxiosResponse<Subscription>) => response.data)
}

export function getSubscriptionData(id: number): Promise<SubscriptionCardData> {
  return http
    .get(`/subscriptions/${id}`)
    .then((response: AxiosResponse<SubscriptionCardData>) => response.data)
}

