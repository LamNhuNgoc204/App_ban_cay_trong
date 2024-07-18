import { View, Text } from 'react-native'
import React, { useState } from 'react'
import hbs from '../../styles/HandBookStyles';

const ItemText3 = (props) => {
    const { txt3 } = props;
    const [pressed, setPressed] = useState(false);

    return (
        <View>
            <Text style={hbs.text4}>{txt3.content}</Text>
            
        </View>
    )
}

export default ItemText3