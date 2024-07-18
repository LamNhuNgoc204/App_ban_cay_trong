import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import hbs from '../../styles/HandBookStyles'

const ItHandBook = (props) => {
    const { pd , onHandBookDetail} = props;

    return (
        <Pressable onPress={() => onHandBookDetail()}>
            <View style={hbs.container}>
                <Image source={{ uri: pd.img }} style={hbs.imgItem} />
                <View >
                    <Text style={hbs.text1}>{pd.name} | {pd.type}</Text>
                    <Text style={hbs.text2}>Độ khó: {pd.level}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ItHandBook