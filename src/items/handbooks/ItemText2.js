import { View, Text, Image, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import hbs from '../../styles/HandBookStyles'
import ItemText3 from './ItemText3';

const ItemText2 = (props) => {
    const {txt2} = props;
    const [pressed, setPressed] = useState(false);

    return (
        <View>
            <View style={hbs.container2}>
                <Text style={hbs.text3}>{txt2.name}</Text>
                <Pressable onPress={() => setPressed(!pressed)}>
                    <Image source={pressed ? require('../../assets/images/arrow-up.png') : require('../../assets/images/arrow-down.png')}/>
                </Pressable>
            </View>

            {/* <FlatList data={txt2.contents}
                        renderItem={({ item }) => <ItemText3 txt3={item} />}
                        keyExtractor={(item) => item.id}
                    /> */}

            {
                pressed ?
                    (<FlatList data={txt2.contents}
                        renderItem={({ item }) => <ItemText3 txt3={item} />}
                        keyExtractor={(item) => item.id}
                    />)
                    : (<View />)
            }
        </View>
    )
}

export default ItemText2