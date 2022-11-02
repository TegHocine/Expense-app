import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

import styles from './ExpensesOutput.style'

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  const total = expenses?.reduce((sum, expense) => sum + expense.amount, 0)
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.period}>{expensePeriod}</Text>
        <Text style={styles.total}>${total.toFixed(2)}</Text>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <ExpenseItem {...itemData} />}
      />
    </View>
  )
}

export default ExpensesOutput
