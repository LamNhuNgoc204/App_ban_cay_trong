import { View, Text } from 'react-native'
import React from 'react'
import cb from '../styles/CheckBillStyles'

const TextBill = ({content, mgt}) => {
    return (
        <View>
            <Text style={[cb.text3, {marginTop: mgt ? mgt : 20}]}>{content}</Text>
        </View>
    )
}

export default TextBill