import axios from 'axios'
import React, { useState, createContext, useContext, useEffect } from 'react'

const BalanceContext = createContext()

export const useBalance = () => {
  return useContext(BalanceContext)
}

function BalanceProvider({ children }) {
  const [balance, setBalance] = useState(0)
  const [movements, setMovements] = useState([])

  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const fullDate = `${day}/${month}/${year}`

  const getMovements = () => {
    axios.get('http://localhost:4001/movements').then((res) => {
      console.log(res.data)
      setMovements(res.data)
    })
  }

  useEffect(() => {
    getMovements()
  }, [])

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
        console.log(res)
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
  /*  setMovements(movements.map(movement => movement.id === id ? updateMovement : movement)) */

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
      value={{ balance, movements, addMovement, deleteMovement, editMovement }}>
      {children}
    </BalanceContext.Provider>
  )
}

export default BalanceProvider
