import { View, Text, Image } from 'react-native'
import React from 'react'
import ntf from '../styles/NotifycationStyles';
import Color from '../styles/Color';

const ItemNotifct2 = (props) => {
    const { data2 } = props;
    console.log("=>>>>", data2);
    return (
        <View style={ntf.itemContainer2} key={data2.productId}>
            <View style={ntf.viewimg2}>
                <Image
                    source={{
                        uri: data2.productImage ?
                            data2.productImage : 'https://cdn.questionpro.com/userimages/site_media/no-image.png'
                    }}
                    style={ntf.img2} />
            </View>
            <View style={ntf.viewtext2}>
                <Text style={[ntf.text1, { color: true ? Color.color007537 : Color.colorFF0000 }]}>{true ? "Đặt hàng thành công" : "Đã hủy đơn hàng"}</Text>
                <Text style={[ntf.text1, { color: Color.color000 }]}>{data2.productName} | <Text style={ntf.text2}>{data2.productType}</Text></Text>
                <Text style={ntf.text3}>{data2.productQuantity} sản phẩm</Text>
            </View>
        </View>
    )
}

export default ItemNotifct2