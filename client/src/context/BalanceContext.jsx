import axios from 'axios'
import React, { useState, createContext, useContext, useEffect } from 'react'

import { useAuth } from './AuthContext'
const BalanceContext = createContext()

export const useBalance = () => {
  return useContext(BalanceContext)
}

function BalanceProvider({ children }) {
  const [balance, setBalance] = useState(0)
  const [movements, setMovements] = useState([])

  const { user } = useAuth()

  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const fullDate = `${day}/${month}/${year}`

  useEffect(() => {
    if (user) {
      getMovements()
    }
  }, [user])

  const getMovements = async () => {
    try {
      const { data } = await axios.get('http://localhost:4001/movements')
      setMovements(data)
    } catch (err) {
      console.log(err)
    }
  }

  const addMovement = ({ description, category, amount, type }) => {
    axios
      .post('http://localhost:4001/movements/create', {
        description,
        category,
        amount,
        type,
        date: fullDate
      })
      .then((res) => {
        getMovements()
      })
      .catch((err) => console.log(err))
  }

  const deleteMovement = (id) => {
    axios
      .delete('http://localhost:4001/movements/delete', { data: { id } })
      .then((res) => {
        getMovements()
      })
      .catch((err) => console.log(err))
  }

  const editMovement = (updateMovement) => {
    axios
      .put('http://localhost:4001/movements/update', updateMovement)
      .then((res) => {
        getMovements()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (movements.length > 0) {
      const updateBalance = movements.reduce(
        (acc, currVal) =>
          currVal.type === 'expense' ? acc - currVal.amount : acc + currVal.amount,
        0
      )
      setBalance(updateBalance)
    }
  }, [movements])

  return (
    <BalanceContext.Provider
      value={{ balance, movements, addMovement, deleteMovement, editMovement }}
    >
      {children}
    </BalanceContext.Provider>
  )
}

export default BalanceProvider
