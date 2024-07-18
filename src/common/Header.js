import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import hds from '../styles/HeaderStyle';
import ast from '../styles/AppStyles';

const Header = (props) => {
    const { iconL, content, iconR, onLeft, onRight } = props;
    return (
        <View style={[hds.container, ast.row, ast.spaceB, ast.aligncenter]}>
            {
                iconL ? (
                    <TouchableOpacity onPress={onLeft ? onLeft : {}}>
                        <Image style={hds.iconSize} source={iconL} />
                    </TouchableOpacity>)
                    : (<View style={hds.iconSize} />)
            }
            <Text style={hds.content}>{content}</Text>
            {
                iconR ? (
                    <TouchableOpacity onPress={onRight ? onRight : {}}>
                        <Image style={hds.iconSize} source={iconR} />
                    </TouchableOpacity>
                )
                    : (<View style={hds.iconSize} />)
            }
        </View>
    )
}

export default Header