import { AxiosResponse } from 'axios'
import { http } from '../http'
import { AuthResponse } from '../models/register-response'
import { User, UserLoginData, UserRegistrationData } from '../models/user'

export function register(data: UserRegistrationData): Promise<User> {
  return http
    .post<AuthResponse>('/register', data)
    .then((response: AxiosResponse<AuthResponse>) => {
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      return response.data.user
    })
}

export function logIn(data: UserLoginData): Promise<User> {
  return http
    .post<AuthResponse>('/login', data)
    .then((response: AxiosResponse<AuthResponse>) => {
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      return response.data.user
    })
}

export function logout() {
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
}
