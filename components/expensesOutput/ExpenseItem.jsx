import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from './ExpensesOutput.style'
import { getFormatedDate } from '../../utils/date'

const ExpenseItem = ({ item }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('manageExpense', { expenseId: item.id })
  }

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.date}>{getFormatedDate(item.date)}</Text>
        </View>
        <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
      </View>
    </Pressable>
  )
}

export default ExpenseItem
