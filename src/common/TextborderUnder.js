import { View, Text } from 'react-native'
import React from 'react'
import AppStyles from '../styles/AppStyles'
import Color from '../styles/Color'

const TextborderUnder = ({ content, width, color, size, font , position}) => {
    return (
        <View>
            <Text style={[AppStyles.textborderUnder, { width: width, color: color ? color : Color.color221F1F, fontSize: size ? size : 16, fontFamily: font ? font : 'Poppins-Medium', textAlign: position ? position : 'justify' }]}>
                {content}
            </Text>
        </View>
    )
}

export default TextborderUnder