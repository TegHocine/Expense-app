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
    const id = `e${expenses.length + 2}`
    setExpenses((currentExpenses) => [{ id, ...expense }, ...currentExpenses])
    return
  }
  const updateExpense = (id, data) => {
    const filteredExpense = expenses.filter((expense) => expense.id !== id)
    setExpenses([...filteredExpense, { id, ...data }])
  }

  return (
    <ExpensesContext.Provider
      value={{ expenses, deleteExpense, addExpense, updateExpense }}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
