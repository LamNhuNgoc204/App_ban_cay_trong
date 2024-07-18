import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../../common/Header'
import ItHandBook from '../../items/handbooks/ItHandBook';
import ast from '../../styles/AppStyles';

const HandBook = (props) => {
    const { navigation } = props;
    const [ArrHB, setArrHB] = useState(notes);

    function onLeft() {
        navigation.goBack();
    }

    function onHandBookDetail() {
        navigation.navigate("HandBookDetail");
    }

    return (
        <View style={ast.container}>
            <Header iconL={require('../../assets/images/iconBack.png')} content={"CẨM NANG TRỒNG CÂY"} onLeft={onLeft} />
            <View>
                <FlatList data={ArrHB}
                    renderItem={({ item }) => <ItHandBook pd={item} onHandBookDetail={onHandBookDetail}/>}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default HandBook

const notes = [
    {
        id: 1,
        img: 'https://i.pinimg.com/564x/d1/ee/bf/d1eebf61cf3f03e07377961aa5fb78cb.jpg',
        name: 'Black Panse',
        type: 'Hybrid',
        level: '3/5'
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/564x/d1/ee/bf/d1eebf61cf3f03e07377961aa5fb78cb.jpg',
        name: 'Black Panse',
        type: 'Hybrid',
        level: '3/5'
    }
]