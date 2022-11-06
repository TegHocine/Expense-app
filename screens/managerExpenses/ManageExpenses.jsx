import { View, Text } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import Btn from '../../components/UI/Btn'
import { GlobalStyles } from '../../constants/style'
import styles from './ManageExpenses.style'
import { ExpensesContext } from '../../context/expensesContext'
import Form from '../../components/form/Form'

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId
  const isEditing = !!expenseId

  const { expenses, deleteExpense, addExpense, updateExpense } =
    useContext(ExpensesContext)

  const selectedExpense = expenses.find((expense) => expenseId === expense.id)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [isEditing, navigation])

  const handleCancel = () => {
    navigation.goBack()
  }

  const handleDelete = () => {
    deleteExpense(expenseId)
    navigation.goBack()
  }

  const handleAdd = (expenseData) => {
    addExpense(expenseData)
    navigation.goBack()
  }

  const handleUpdate = (expenseData) => {
    updateExpense(expenseId, expenseData)
    navigation.goBack()
  }

  return (
    <View style={styles.manageWrapper}>
      <Form
        onCancel={handleCancel}
        submitLabel={isEditing ? 'Update' : 'Confirm'}
        onSubmit={isEditing ? handleUpdate : handleAdd}
        defaultValue={selectedExpense}
      />

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
