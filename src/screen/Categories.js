import { FlatList, Pressable, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import cateS from '../styles/CateStyles'
import AppStyles from '../styles/AppStyles'
import ItemProducts from '../items/ItemProducts'
import dms from '../styles/DanhMucStyles'
import AxiosInstance from '../helper/AxiosInstance'
import Color from '../styles/Color'

const Categories = (props) => {
  const { navigation } = props;
  const { idCate, nameCate } = props.route.params;
  const [types, setTypes] = useState([]);
  const [typesName, setTypesName] = useState();
  const [selectedId, setSelectedId] = useState();

  function onLeft() {
    navigation.goBack();
  }

  //url lấy tất cả type: http://localhost:8888/types/getalltype
  const fetchDataType = async () => {
    try {
      const response = await AxiosInstance().get('/types/getalltype');
      if (response.status) {
        setTypes(response.data);
        // console.log(response.data);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log("Lỗi gòi nè dev ơi", error);
    }
  }

  useEffect(() => {
    fetchDataType();
    return () => { }
  }, [])

  useEffect(() => {
    if (types.length > 0) {
      setSelectedId(types[0]._id);
      setTypesName(types[0].name);
      // console.log(typesName);
    }
    return () => { }
  }, [types]);

  //Lấy sản phẩm theo từng danh mục và types
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getProductOfType = async () => {
    try {
      //http://localhost:8888/types/get_type_detail_by_name/65ffb215343bfd011b5596ce
      setRefreshing(true);
      const response = await AxiosInstance().post(`/types/get_type_detail_by_name/${idCate}`, { name: typesName });
      if (response.status) {
        setProducts(response.data);
      } else {
        setProducts([]);
        console.log("Xảy ra lỗi");
      }
      setRefreshing(false);
    } catch (error) {
      // ToastAndroid.show(`Xảy ra lũi ${error.message} gòi. Thử lại nhé :3 `, ToastAndroid.SHORT);
      console.log(`Xảy ra lũi ${error.message} gòi. Thử lại nhé :3 `);
    }
  }

  useEffect(() => {
    getProductOfType();
    return () => { }
  }, [typesName]);

  const getTypeNameById = async (typeId) => {
    const type = types.find((item) => item._id === typeId);
    return type.name;
  }

  useEffect(() => {
    // console.log(selectedId);
    if (selectedId) {
      const typeName = getTypeNameById(selectedId);
      setTypesName(typeName._j);
      // console.log(typesName);
    }
  }, [selectedId])


  //Selector type
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <Pressable onPress={onPress} style={[dms.press, { backgroundColor }]}>
      <Text style={[dms.text, { color: textColor }]}>{item.name}</Text>
    </Pressable>
  );

  const renderItem = (item) => {
    const backgroundColor = item._id === selectedId ? Color.color009245 : '#ffffff';
    const color = item._id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  function onCart() {
    navigation.navigate("Cart");
  }

  return (
    <View style={[AppStyles.container]}>
      <Header iconL={require('../assets/images/iconBack.png')} content={nameCate.toUpperCase()} iconR={require('../assets/images/shopping-cart.png')} onLeft={onLeft} onRight={onCart} />
      <FlatList data={types}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={a => a._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        extraData={selectedId}
        style={[cateS.flatDanhMuc]}
      />
      <FlatList style={cateS.flatSP} numColumns={2}
        data={products}
        renderItem={({ item }) => <ItemProducts data={item} navigation={navigation} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        onRefresh={() => setRefreshing(!refreshing)} // Đặt refreshing thành true khi người dùng kéo để làm mới
        refreshing={refreshing}
      />
    </View>
  )
}

export default Categories