import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import fds from '../styles/FindProductStyles'
import ast from '../styles/AppStyles'

const ItFindProduct = (props) => {
    const { products } = props;
    const { navigation } = props;

    function onProductDetail(index) {
        navigation.navigate("ProductDetail", { index: index });
    }

    return (
        <TouchableOpacity onPress={() => onProductDetail(products._id)} style={[ast.row, fds.productContainer]}>
            <View style={fds.viewimg2}>
                <Image source={{ uri: products.images && products.images[0] }} style={fds.img2} />
            </View>
            <View style={fds.viewText2}>
                <Text style={fds.text2}>{products.name} | {products.type}</Text>
                <Text style={fds.text2}>{products.price}</Text>
                <Text style={fds.text3}>Còn {products.quantity} sản phẩm</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItFindProduct