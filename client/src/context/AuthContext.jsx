import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const userLocalStorage = JSON.parse(localStorage.getItem('user') || 'null')

/* axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${userLocalStorage}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
) */
axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      config.headers.Authorization = `Bearer ${user}`
    }
    console.log('request config', config)
    return config
  },
  (error) => {
    // console.log("request error", error);
    return Promise.reject(error)
  }
)

function AuthProvider({ children }) {
  const [user, setUser] = useState(userLocalStorage)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const login = (url, user) => {
    setLoading(true)
    axios
      .post(url, user)
      .then((res) => {
        const credentials = res.data
        setUser(credentials.token)
        setError(null)
        setLoading(false)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        const { error } = err.response.data
        setError(error)
        setLoading(false)
        hideError()
      })
  }

  const hideError = () => {
    setTimeout(() => {
      setError(false)
    }, 3000)
  }

  return (
    <AuthContext.Provider value={{ user, error, loading, login, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
