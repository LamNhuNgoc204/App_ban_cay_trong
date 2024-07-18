import { View, Text, Image, Pressable, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import hbs from '../../styles/HandBookStyles';
import ItemText2 from './ItemText2';

const ItemText1 = (props) => {
    const { txt1 } = props;
    const [pressed, setPressed] = useState(false);

    return (
        <View>
            <View style={hbs.container1}>
                <Text style={hbs.txtItem1}>{txt1.name}</Text>
                <TouchableOpacity onPress={() => setPressed(!pressed)} style={hbs.press}>
                    <Image style={hbs.imgIcon}
                        source={pressed ? require('../../assets/images/minuss.png') : require('../../assets/images/pluss.png')}
                    />
                </TouchableOpacity>

            </View>
            {/* <FlatList data={txt1.stage} 
                        renderItem={({ item }) => <ItemText2 txt2={item} />}
                        keyExtractor={(item) => item.id}
                    /> */}

            {
                pressed ?
                    (<FlatList data={txt1.stage}
                        renderItem={({ item }) => <ItemText2 txt2={item} />}
                        keyExtractor={(item) => item.id}
                    />)
                    : (<View />)
            }
        </View>
    );
}

export default ItemText1
