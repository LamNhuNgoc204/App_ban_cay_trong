import { View, Text } from 'react-native'
import React from 'react'
import hst from '../styles/HistoryStyles'

const TextHisDetail = ({ content, marginT }) => {
  return (
    <View style={{ marginTop: marginT ? marginT : 15 }}>
      <Text style={hst.textgray}>{content}</Text>
    </View>
  )
}

export default TextHisDetail