import { View, Text } from 'react-native'
import React from 'react'
import ProfileStyles from '../styles/ProfileStyles'

const TextProfile1 = ({content}) => {
    return (
        <View>
            <Text style={ProfileStyles.txtChung} onPress={() => { }}>{content}</Text>
        </View>
    )
}

export default TextProfile1