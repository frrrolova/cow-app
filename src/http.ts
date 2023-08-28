import axios from 'axios'

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
