import { View, Text } from 'react-native'
import React from 'react'
import dts from '../styles/DetailStyles'
import Color from '../styles/Color'

const ViewDetail = ({ content1, content2 , color}) => {
    return (
        <View style={dts.viewContainer}> 
            <Text style={[dts.text1]}>{content1}</Text>
            <Text style={[dts.text1,{color: color? color : Color.color3A3A3A}]}>{content2}</Text>
        </View>
    )
}

export default ViewDetail