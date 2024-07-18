import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import qst from '../styles/QuestionsStyles';

const ItemQues = (props) => {
    const { ques } = props;
    const [onPress, setonPress] = useState(false)

    function handlePress() {
        setonPress(!onPress);
        console.log('press');
    }

    return (
        <View style={qst.itemContainer}>
            <View style={qst.qes}>
                <Text style={qst.textques}>{ques.question}</Text>
                <Pressable style={qst.press} onPress={handlePress}>
                    {
                        onPress ?
                            (<Image source={require('../assets/images/arrow-up.png')} style={qst.img} />)
                            : (<Image source={require('../assets/images/arrow-down.png')} style={qst.img} />)
                    }
                </Pressable>
            </View>
            {
                onPress ?
                    (<Text style={qst.ans}>{ques.answer}</Text>) :
                    (<View style={qst.view} />)
            }
        </View>
    )
}

export default ItemQues