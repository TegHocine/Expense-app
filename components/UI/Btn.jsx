import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Btn.style'
import { GlobalStyles } from '../../constants/style'

const IconButton = ({
  name,
  size = 20,
  color = GlobalStyles.colors.primary600,
  onPress,
  bgColor = 'transparent',
  icon = false
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        !icon && { flex: 1 }
      ]}>
      {icon ? (
        <View style={[styles.containerIcon, { backgroundColor: bgColor }]}>
          <Icon
            name={name}
            size={size}
            color={color}
          />
        </View>
      ) : (
        <View style={[styles.containerBtn, { backgroundColor: bgColor }]}>
          <Text style={[styles.placeholder, { color: color, fontSize: size }]}>
            {name.toUpperCase()}
          </Text>
        </View>
      )}
    </Pressable>
  )
}

export default IconButton
