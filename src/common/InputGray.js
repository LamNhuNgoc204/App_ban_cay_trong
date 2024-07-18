import { View, Text, TextInput } from 'react-native'
import React from 'react'
import ast from '../styles/AppStyles'
import Color from '../styles/Color';

const InputGray = (props) => {
  const { placeholder, type, value, onChange } = props;

  return (
    <View style={ast.viewGray}>
      <TextInput style={ast.inputGray} placeholderTextColor={Color.color7D7B7B}
        value={value ? value : ""}
        placeholder={placeholder}
        keyboardType={type ? type : 'default'}
        onChangeText={(e) => onChange(e)} />
    </View>
  )
}

export default InputGray