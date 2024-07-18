import { View, Text } from 'react-native'
import React from 'react'
import ProfileStyles from '../styles/ProfileStyles'

const TextProfile2 = ({content}) => {
  return (
    <View>
      <Text style={ProfileStyles.txtBold}>{content}</Text>
    </View>
  )
}

export default TextProfile2