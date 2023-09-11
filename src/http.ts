import axios, { AxiosError } from 'axios'
import { router } from './Router'

export const http = axios.create({
  baseURL: 'http://localhost:3001',
})

http.interceptors.request.use((request) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    request.headers.Authorization = 'Bearer ' + token
  }
  return request
})

http.interceptors.response.use(
  (response) => response,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      router.navigate('/auth')
    }
  }
)