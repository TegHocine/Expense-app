import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../../components/expensesOutput/ExpensesOutput'

import { ExpensesContext } from '../../context/expensesContext'
import { getPast } from '../../utils/date'

const RecentExpense = () => {
  const { expenses } = useContext(ExpensesContext)

  const recentExpenses = expenses
    ?.filter((expense) => {
      const today = new Date()
      const date7DaysAgo = getPast(today, 7)

      return expense.date > date7DaysAgo
    })
    .sort(
      (expenseA, expenseB) => new Date(expenseB.date) - new Date(expenseA.date)
    )

  return (
    <View>
      <ExpensesOutput
        expenses={recentExpenses}
        expensePeriod={'Last 7 Days'}
      />
    </View>
  )
}

export default RecentExpense
