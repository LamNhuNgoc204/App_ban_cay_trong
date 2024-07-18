import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import hs from '../styles/HomeStyles';
import Text12 from '../common/TextMedium';
import Color from '../styles/Color';
import HomeStyles from '../styles/HomeStyles';

const ItemProducts = (props) => {
    const { data , navigation} = props;

    function onProductDetail(index) {
        navigation.navigate("ProductDetail", { index: index });
    }
    return (
        <TouchableOpacity onPress={() => onProductDetail(data._id)} style={HomeStyles.view2}>
            <View style={hs.bgItem}>
                <Image style={HomeStyles.imgItem} source={{ uri: data.images ? data.images[0] : 'https://i.pinimg.com/236x/56/b8/eb/56b8eb425e1b04f591d4e2e016676769.jpg'}} />
            </View>
            <Text12 content={data.name} size={16} color={Color.color221F1F} number={1} />
            <Text style={HomeStyles.textItem}>{data.type}</Text>
            <Text12 content={data.price + "đ"} size={16} color={Color.color007537} />
        </TouchableOpacity>
    )
}

export default ItemProducts