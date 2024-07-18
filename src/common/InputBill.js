import { Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import cb from '../styles/CheckBillStyles'

const InputBill = ({ content, mgT, type, handleFocus, handleOnBlur, onFocus, onChange, value }) => {

    return (
        <TextInput placeholder={content}
            placeholderTextColor={"#7D7B7B"}
            onFocus={handleFocus}
            onBlur={handleOnBlur}
            onChangeText={(e) => onChange(e) ? onChange(e) : {}}
            value={value? value : ""}
            keyboardType={type ? type : 'default'}
            style={[cb.input, { marginTop: mgT ? mgT : 5, borderBottomWidth: onFocus ? 1.5 : 1 }]} />

    )
}

export default InputBill
