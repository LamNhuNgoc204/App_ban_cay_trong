import { View, Text } from 'react-native'
import React from 'react'
import dts from '../styles/DetailStyles'

const ItDetail = ({type}) => {
  return (
    <View style={dts.itemContainer}>
      <Text style={dts.itemName}>{type.name}</Text>
    </View>
  )
}

export default ItDetail