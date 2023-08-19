import { useEffect, useState } from 'react'
import { User, UserLoginData } from '../models/user'
import { logIn as serviceLogIn } from '../services/auth.service'

export function useAuth() {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    const currentUser = localStorage.getItem('user')
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  const logIn = (data: UserLoginData) => {
    serviceLogIn(data)
  }
  const logOut = () => {}
  const register = () => {}

  return {
    user,
    login,
    logout,
    register,
  }
}
