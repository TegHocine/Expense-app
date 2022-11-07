import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Btn from '../UI/Btn'
import { GlobalStyles } from '../../constants/style'

import styles from './Form.style'

import { getFormatedDate } from '../../utils/date'

const Form = ({ onCancel, submitLabel, onSubmit, defaultValues }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultValues ? getFormatedDate(defaultValues.date) : '',
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true
    }
  })

  const handleInputs = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true }
      }
    })
  }

  const handleSubmit = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValide = expenseData.date.toString() !== 'Invalid Date'
    const descIsValid = expenseData.description.trim().length > 0

    if (!amountIsValid || !dateIsValide || !descIsValid) {
      return setInputs((currentInputs) => {
        return {
          amount: {
            ...currentInputs.amount,
            isValid: amountIsValid
          },
          date: {
            ...currentInputs.date,
            isValid: dateIsValide
          },
          description: {
            ...currentInputs.description,
            isValid: descIsValid
          }
        }
      })
    }

    onSubmit(expenseData)
  }

  return (
    <>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
          <Input
            style={{ flex: 1 }}
            errorStyle={!inputs.amount.isValid && styles.error}
            label='Amount'
            inputTextOptions={{
              keyboardType: 'decimal-pad',
              onChangeText: handleInputs.bind(this, 'amount'),
              value: inputs.amount.value
            }}
          />
          <Input
            style={{ flex: 1 }}
            errorStyle={!inputs.date.isValid && styles.error}
            label='Date'
            inputTextOptions={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 11,
              onChangeText: handleInputs.bind(this, 'date'),
              value: inputs.date.value
            }}
          />
        </View>

        <Input
          errorStyle={!inputs.description.isValid && styles.error}
          label='Description'
          inputTextOptions={{
            multiline: true,
            // autoCapitalize: 'none'
            // autoCorrect: false // default is true
            onChangeText: handleInputs.bind(this, 'description'),
            value: inputs.description.value
          }}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Btn
          name={'cancel'}
          color={GlobalStyles.colors.primary500}
          onPress={onCancel}
        />

        <Btn
          name={submitLabel}
          bgColor={GlobalStyles.colors.accent2}
          color={GlobalStyles.colors.primary500}
          onPress={handleSubmit}
        />
      </View>
    </>
  )
}

export default Form
