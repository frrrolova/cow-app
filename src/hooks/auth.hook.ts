import { useEffect, useState } from 'react'
import { User, UserLoginData, UserRegistrationData } from '../models/user'
import {
  logIn as serviceLogIn,
  logOut as serviceLogOut,
  register as serviceRegister,
} from '../services/auth.service'

export function useAuth() {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    const currentUser = localStorage.getItem('user')
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  const logIn = (data: UserLoginData): Promise<User> => {
    return serviceLogIn(data).then((user) => {
      setUser(user)
      return user
    })
  }

  const logOut = (): void => {
    setUser(undefined)
    return serviceLogOut()
  }

  const register = (data: UserRegistrationData): Promise<User> => {
    return serviceRegister(data)
  }

  return {
    user,
    logIn,
    logOut,
    register,
  }
}
