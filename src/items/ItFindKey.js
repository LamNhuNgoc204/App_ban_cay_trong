import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import ast from '../styles/AppStyles';
import fds from '../styles/FindProductStyles';

const ItFindKey = (props) => {
    const { keys } = props;

    return (
        <View style={[ast.row, ast.spaceB, fds.keyContainer]}>
            <Pressable>
                <Image source={require('../assets/images/clock.png')} style={fds.img} />
            </Pressable>
            <Text style={fds.itemkey}>{keys.name}</Text>
            <Pressable>
                <Image source={require('../assets/images/quit.png')} style={fds.img} />
            </Pressable>
        </View>
    )
}

export default ItFindKey