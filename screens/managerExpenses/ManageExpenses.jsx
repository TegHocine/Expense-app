import { View, Text } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import Btn from '../../components/UI/Btn'
import { GlobalStyles } from '../../constants/style'
import styles from './ManageExpenses.style'
import { ExpensesContext } from '../../context/expensesContext'

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId
  const isEditing = !!expenseId

  const { deleteExpense, addExpense } = useContext(ExpensesContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [isEditing, navigation])

  const handleCancel = () => {
    navigation.goBack()
  }
  const handleConfirm = () => {
    const expense = {
      description: 'something to add ',
      amount: 89.29,
      date: new Date('2022-11-02')
    }
    addExpense(expense)
    navigation.goBack()
  }

  const handleDelete = () => {
    deleteExpense(expenseId)
    navigation.goBack()
  }
  const handleUpdate = () => {
    navigation.goBack()
  }

  return (
    <View>
      <View style={styles.btnWrapper}>
        <Btn
          name={'cancel'}
          color={GlobalStyles.colors.primary500}
          onPress={handleCancel}
        />

        <Btn
          name={isEditing ? 'Update' : 'Confirm'}
          bgColor={GlobalStyles.colors.accent2}
          color={GlobalStyles.colors.primary500}
          onPress={isEditing ? handleUpdate : handleConfirm}
        />
      </View>
      {isEditing ? (
        <View style={styles.deleteWrapper}>
          <Btn
            name='trash'
            size={30}
            color={GlobalStyles.colors.error500}
            icon
            onPress={handleDelete}
          />
        </View>
      ) : null}
    </View>
  )
}

export default ManageExpense
