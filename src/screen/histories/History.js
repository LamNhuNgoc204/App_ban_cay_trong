import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ast from '../../styles/AppStyles'
import hst from '../../styles/HistoryStyles'
import Header from '../../common/Header'
import ntfs from '../../styles/NotifycationStyles'
import ItemNotifct1 from '../../items/ItemNotifct1'
import { useSelector } from 'react-redux'
import SweetAlert from 'react-native-sweet-alert'
import AxiosInstance from '../../helper/AxiosInstance'

const History = (props) => {
  const { navigation } = props;
  const useAppSeletor = useSelector;
  const state = useAppSeletor((state) => state.app);
  const userId = state.user._id;

  function onLeft() {
    navigation.goBack();
  }
  const [CheckData, setCheckData] = useState([]);


  //Lấy lịch sử mua hàng: http://localhost:8888/orders/order_history/65fc2fab513fbcabbcb298c3
  const fetchData = async () => {
    try {
      const response = await AxiosInstance().get(`/orders/order_history/${userId}`);
      // console.log(response);
      if (response.status) {
        setCheckData(response.data);
      }
    } catch (error) {
      SweetAlert.showAlertWithOptions({
        title: 'Oops...',
        subTitle: `Oops. Đang xảy ra lỗi ${error} rồi. Bạn đợi một chút nhé <3`,
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        style: 'error',
        cancellable: true
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log("response.data", CheckData);



  return (
    <View style={ast.container}>
      <Header iconL={require('../../assets/images/iconBack.png')} content={'LỊCH SỬ GIAO DỊCH'} onLeft={onLeft} />
      {
        CheckData.length !== 0 ? (<FlatList data={CheckData}
          style={ntfs.flat}
          renderItem={({ item }) => <ItemNotifct1 data={item} />}
          keyExtractor={(item) => item._id} />)
          :
          (<Text style={ntfs.text} onPress={() => navigation.navigate('BottomTab')}>Shopping ngay</Text>)
      }
    </View>
  )
}

export default History

