import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react'; import Color from '../styles/Color';
import ast from '../styles/AppStyles'; import hs from '../styles/HomeStyles';
import Text12 from '../common/TextMedium'; import ItemHome3 from '../items/ItemHome3';
import HomeStyles from '../styles/HomeStyles'; import TextborderUnder from '../common/TextborderUnder';
import AxiosInstance from '../helper/AxiosInstance';

const Home = (props) => {
  const { navigation } = props;
  const [category, setCategory] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const response = await AxiosInstance().get("/categories/get_all_cate");
      // console.log("result--------", response.status);

      if (response.status) {
        const result = response.data;
        // console.log("result--------", result);
        setCategory(result);
        // console.log("-------------------->", category)
      }
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    return () => { }
  }, []);

  const renderProductItem = (products) => {
    const row = [];
    const productsInRow = 2;
    const toltalRow = 2;

    //So luong san pham se hien thi
    const productQuatity = products.slice(0, productsInRow * toltalRow); //4

    for (let i = 0; i < toltalRow; i++) {
      const startIndex = i * productsInRow;
      const productToShow = productQuatity.slice(startIndex, startIndex + productsInRow);
      row.push(
        <View key={i} style={hs.viewRow}>
          {
            productToShow.map((element, index) => {
              // console.log(element.img);
              return (
                <TouchableOpacity key={index} style={{ width: '45%' }} onPress={() => onProductDetail(element._id)}>
                  {/* <View > */}
                  <View style={hs.bgItem}>
                    <Image style={HomeStyles.imgItem} source={{ uri: element.images[0] }} />
                  </View>
                  <Text12 content={element.name} size={16} color={Color.color221F1F} />
                  {
                    element.property ? (<Text style={HomeStyles.textItem}>{element.property}</Text>)
                      : (<View />)
                  }
                  <Text12 content={element.price + "đ"} size={16} color={Color.color007537} />
                  {/* </View> */}
                </TouchableOpacity>
              )
            })
          }
        </View>
      )
    }
    return row;
  };

  const renderCategory = ({ _id, name, products }) => {
    return (
      <View key={_id} style={{ marginHorizontal: 10, marginVertical: 30 }}>
        <Text12 content={name} size={24} color={Color.color221F1F} />
        {renderProductItem(products)}
        <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 10 }} onPress={() => navigation.navigate('Categories', { idCate: _id, nameCate: name })} >
          <TextborderUnder content={'Xem thêm ' + name.toLowerCase()} color={Color.color221F1F} size={16} font={'Poppins-Medium'} />
        </TouchableOpacity>
      </View>
    );
  }

  function onCart() {
    navigation.navigate("Cart");
  }

  function onProductDetail(index) {
    // console.log(index);
    navigation.navigate("ProductDetail", { index: index });
  }

  return (
    <ScrollView style={[ast.container]}>
      <View >
        <ImageBackground source={require('../assets/images/bgHome.png')} style={[hs.imgBg]} >
          <View style={[ast.row, ast.spaceB, hs.view1]}>
            <View>
              <Text12 content={'Planta - tỏa sáng không gian nhà bạn'} size={24} color={Color.color221F1F} width={250} />
              <View style={ast.row}>
                <Text12 content={'Xem hàng mới về '} size={16} color={Color.color007537} />
                <Image source={require('../assets/images/green-arow-right.png')} />
              </View>
            </View>
            <Pressable onPress={() => onCart()}>
              <Image style={[hs.imgCart]} source={require('../assets/images/cart.png')} />
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      {
        refreshing === false ? (category.map(renderCategory)) : (<Text>Is loading....</Text>)
      }
      <ItemHome3 />
    </ScrollView>
  )
}

export default Home