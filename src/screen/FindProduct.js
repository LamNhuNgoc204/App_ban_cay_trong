import { View, Text, TextInput, Image, FlatList, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import ast from '../styles/AppStyles'
import fds from '../styles/FindProductStyles'
import Header from '../common/Header'
import Color from '../styles/Color'
import ItFindProduct from '../items/ItFindProduct'
import ItFindKey from '../items/ItFindKey'
import AxiosInstance from '../helper/AxiosInstance'

const FindProduct = (props) => {
  const { navigation } = props;

  function onLeft() {
    navigation.goBack();
  }
  const [inputKey, setInputKey] = useState("");
  const [listKey, setlistKey] = useState(lstKey);
  const [listSp, setlistSp] = useState([]);
  const [isKey, setisKey] = useState(false);

  const handleInput = async (text) => {
    setInputKey(text);
  }

  const onBlur = async () => {
    if (inputKey.trim() === "") {
      // Nếu input chưa được nhập, hiển thị danh sách từ khóa
      setisKey(false);
    } else {
      setTimeout(async () => {
        try {
          const response = await AxiosInstance().post(`/products/find_product/${inputKey}`);
          if (response.status) {
            setisKey(true);
            setlistSp(response.data);
          } else {
            setisKey(false);
            console.log(`Lỗi rồi nè => ${response.message}`);
          }
        } catch (error) {
          ToastAndroid.show(`Lỗi rồi nè => ${error}`, ToastAndroid.SHORT);
        }
      }, 0);
    }
  }

  return (
    <View style={ast.container}>
      <Header iconL={require('../assets/images/iconBack.png')} content={'TÌM KIẾM'} onLeft={onLeft} />

      <View style={fds.container}>
        <View style={[fds.viewInput, ast.row, ast.spaceB]}>
          <TextInput placeholder='Tìm kiếm'
            onChangeText={(text) => handleInput(text)}
            placeholderTextColor={Color.colorABABAB}
            keyboardType='default'
            style={fds.input}
            onBlur={onBlur}
          />
          <Image source={require('../assets/images/search.png')} style={fds.img} />
        </View>

        {
          isKey ?
            (<FlatList data={listSp}
              renderItem={({ item }) => <ItFindProduct navigation={navigation} products={item} />}
              keyExtractor={(item) => item._id}
              style={fds.flatsp} />)
            :
            (
              <View style={fds.flatKey}>
                <Text style={fds.text}>Tìm kiếm gần đây</Text>
                <FlatList data={listKey}
                  renderItem={({ item }) => <ItFindKey keys={item} />}
                  keyExtractor={(item) => item.id}
                />
              </View>
            )
        }
      </View>

    </View>
  )
}

export default FindProduct

const lstKey = [
  {
    id: 1,
    name: 'Spider plants'
  },
  {
    id: 2,
    name: 'Song of India'
  }
]