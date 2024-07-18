import { View, Text } from 'react-native'
import React from 'react'
import st from '../styles/LoginStyle';

const TextBold = (props) => {
  const { text } = props;
  return (
    <View>
      <Text style={st.textbold}>{text}</Text>
    </View>
  )
}

export default TextBold