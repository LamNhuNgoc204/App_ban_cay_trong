import { View, Text } from 'react-native'
import React from 'react'
import st from '../styles/LoginStyle';

const TextRegular = (props) => {
  const { text } = props;
  return (
    <View>
      <Text style={[st.textregular, { marginTop: text == "Tạo tài khoản" ? -5 : -10 }]}>{text}</Text>
    </View>
  )
}

export default TextRegular