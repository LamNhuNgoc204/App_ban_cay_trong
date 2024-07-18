import { View, Text, Image } from 'react-native'
import React from 'react'
import fds from '../styles/FindProductStyles'
import ast from '../styles/AppStyles'
import cbs from '../styles/CheckBillStyles'

const ItBill = (props) => {
    const { products } = props;
    return (
        <View style={[ast.row, fds.productContainer]}>
            <View style={fds.viewimg2}>
                <Image source={{ uri: products.img }} style={fds.img2} />
            </View>
            <View style={fds.viewText2}>
                <Text style={fds.text2}>{products.name} | <Text style={cbs.txt1}>{products.quatity}</Text></Text>
                <Text style={fds.text2}>{products.price}</Text>
                <Text style={fds.text3}>Còn {products.quatity} sản phẩm</Text>
            </View>
        </View>
    )
}

export default ItBill