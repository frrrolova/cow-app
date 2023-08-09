export interface User {
  email: string
  id?: number
  phone: string
  name: string
}

export interface UserRegistrationData extends User {
  password: string
}

export interface UserLoginData {
  email: string
  password: string
}
