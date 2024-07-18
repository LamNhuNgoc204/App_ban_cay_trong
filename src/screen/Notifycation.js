import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import ntfs from '../styles/NotifycationStyles'
import ast from '../styles/AppStyles'
import ItemNotifct1 from '../items/ItemNotifct1'
import { useSelector } from 'react-redux'
import SweetAlert from 'react-native-sweet-alert'
import AxiosInstance from '../helper/AxiosInstance'
import ItemNotifct2 from '../items/ItemNotifct2'

const Notifycation = (props) => {
    const { navigation } = props;
    const useAppSelector = useSelector;
    const appState = useAppSelector((state) => state.app);
    const userId = appState.user._id;

    function onLeft() {
        navigation.goBack();
    }
    const [data, setData] = useState([]);

    //Lấy lịch sử mua hàng: http://localhost:8888/orders/order_history/65fc2fab513fbcabbcb298c3
    // const fetchData = async () => {
    //     try {
    //         const response = await AxiosInstance().get(`/orders/order_history/${userId}`);
    //         if (response.status) {
    //             const productArray = response.data.map(order => order.products);
    //             setData(productArray);
    //         }

    //     } catch (error) {
    //         SweetAlert.showAlertWithOptions({
    //             title: 'Oops...',
    //             subTitle: `Oops. Đang xảy ra lỗi ${error} rồi. Bạn đợi một chút nhé <3`,
    //             confirmButtonTitle: 'OK',
    //             confirmButtonColor: '#000',
    //             style: 'error',
    //             cancellable: true
    //         });
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    //     return () => { }
    // }, []);


    // console.log(data);


    return (
        <View style={ast.container}>
            <Header iconL={require('../assets/images/iconBack.png')} content={'THÔNG BÁO'} onLeft={onLeft} />
            {/* <Text style={ntfs.text}>Hiện chưa có thông báo nào cho bạn</Text> */}
            {
                dataaa.length !== 0  ? (<FlatList data={data}
                    style={ntfs.flat}
                    renderItem={({ item }) => <ItemNotifct2 data2={item} />}
                    keyExtractor={(item) => item._id} />)
                    :
                    (<Text style={[ntfs.text, {fontWeight: '400', fontSize: 15}]}>Hiện chưa có thông báo nào cho bạn hết trơn á</Text>)
            }

        </View >
    )
}

export default Notifycation

const dataaa = []