import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NotifycationStyles from '../styles/NotifycationStyles'
import ItemNotifct2 from './ItemNotifct2';

const ItemNotifct1 = (props) => {
    const { data } = props;
    // console.log("danh sach sp",data.products);

    return (
        <View style={NotifycationStyles.item1Container}>
            <View style={NotifycationStyles.viewItem1}>
                <Text style={NotifycationStyles.textitem1}>{data.create_At}</Text>
            </View>
            <FlatList data={data.products}
                keyExtractor={(item1) => item1.productId}
                renderItem={({ item }) => <ItemNotifct2 data2={item} />}
            />
        </View>
    )
}

export default ItemNotifct1
