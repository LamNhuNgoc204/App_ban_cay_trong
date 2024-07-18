import { View, Text } from 'react-native'
import React from 'react'
import LoginStyle from '../styles/LoginStyle'
import Color from '../styles/Color'

const Text12 = ({ content, size, color, width,number }) => {
  return (
    <View>
      <Text numberOfLines={number ? number : 5} style={[st.textSize12, { fontSize: size, color: color, width: width ? width : 'auto' }]}>{content}</Text>
    </View>
  )
}

export default Text12