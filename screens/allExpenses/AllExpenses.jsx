import { View } from 'react-native'
import React, { useContext } from 'react'

import ExpensesOutput from '../../components/expensesOutput/ExpensesOutput'

import { ExpensesContext } from '../../context/expensesContext'

const AllExpense = () => {
  const { expenses } = useContext(ExpensesContext)

  const sortedByDate = expenses.sort(
    (expenseA, expenseB) => new Date(expenseB.date) - new Date(expenseA.date)
  )
  return (
    <View>
      <ExpensesOutput
        expenses={sortedByDate}
        expensePeriod={'Total'}
        fallBackText='No expenses found!!'
      />
    </View>
  )
}

export default AllExpense
