import { createContext, useState } from 'react'

import { dummyExpenses } from '../constants/dummy-data'
import { getFormatedDate } from '../utils/date'

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {}
})

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([...dummyExpenses])

  const deleteExpense = (id) =>
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id)
    )

  const addExpense = (expense) => {
    const id = `e${expense.length + 2}`
    setExpenses((currentExpenses) => [{ id, ...expense }, ...currentExpenses])
  }

  return (
    <ExpensesContext.Provider value={{ expenses, deleteExpense, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
