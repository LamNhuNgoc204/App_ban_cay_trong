import { View, Text, Pressable } from 'react-native'
import React from 'react'
import uds from '../styles/UpdateStyles'
import Color from '../styles/Color'

const Buttons = ({content, bgc, onPress}) => {
    return (
        <View>
            <Pressable style={uds.press} onPress={onPress? onPress : {}}>
            <Text style={[uds.textpress, {backgroundColor: bgc ? bgc : Color.color007537}]}>{content}</Text>
        </Pressable>
        </View>
    )
}

export default Buttons