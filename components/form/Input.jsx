import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './Form.style'
import { GlobalStyles } from '../../constants/style'

const Input = ({ label = 'label', inputTextOptions, style, errorStyle }) => {
  const inputStyle = [styles.input]

  if (inputTextOptions && inputTextOptions.multiline)
    inputStyle.push(styles.multiline)

  return (
    <View style={[styles.inputWrapper, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[...inputStyle, errorStyle]}
        placeholderTextColor={GlobalStyles.colors.gray900}
        {...inputTextOptions}
      />
    </View>
  )
}

export default Input
