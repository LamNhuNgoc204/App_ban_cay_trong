import { View, Text, Image, Pressable, ToastAndroid } from 'react-native'; import React, { useEffect, useState } from 'react';
import ast from '../styles/AppStyles'; import dts from '../styles/DetailStyles'
import Header from '../common/Header'; import TextborderUnder from '../common/TextborderUnder'
import Color from '../styles/Color'; import ViewDetail from '../common/ViewDetail'
import Buttons from '../common/Buttons'; import Slider from '../common/Slider'
import AxiosInstance from '../helper/AxiosInstance'; import { useSelector } from 'react-redux';
import SweetAlert from 'react-native-sweet-alert'

const ProductDetail = (props) => {
  const { navigation } = props;
  const { index } = props.route.params; console.log(index)
  const [ArrImg, setArrImg] = useState([]);
  const [pdQuantity, setPdQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const decreaseQuantity = () => {
    if (pdQuantity > 1) {
      setPdQuantity(pdQuantity - 1);
      setTotalPrice(product.price * (pdQuantity - 1));
    }
  };

  const [product, setProduct] = useState([]);

  //Lay thong tin chi tiet cua tung san pham
  const fetchProduct = async () => {
    try {
      const response = await AxiosInstance().get(`/products/get_product_detailt/${index}`);
      if (response.status) {
        setProduct(response.data);
        // console.log("pd day ne", product);
      }
      // console.log("data", response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQuantity = () => {
    if (pdQuantity < product.quantity) {
      setPdQuantity(pdQuantity + 1);
      setTotalPrice(product.price * (pdQuantity + 1));
    } else if (pdQuantity == product.quantity) {
      setPdQuantity(product.quantity);
      setTotalPrice(product.price * (product.quantity));
      SweetAlert.showAlertWithOptions({
        title: 'Oops...',
        subTitle: `Bạn đã đạt số lượng tối đa của sản phẩm này`,
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        style: 'error',
        cancellable: true
      });
    }
  };


  useEffect(() => {
    fetchProduct();
    return () => { }
  }, [])

  useEffect(() => {
    setArrImg(product.images)
    setTotalPrice(product.price);
    return () => { }
  }, [product])


  //Quay ve trang truoc
  function onLeft() {
    navigation.goBack();
  }

  //Them san pham vao gio hang
  const useAppSelector = useSelector;
  const user = useAppSelector((state) => state.app.user);
  // console.log(user._id);

  //url add to cart: http://localhost:8888/carts/add_to_cart/65fc2fab513fbcabbcb298c3
  const addtoCart = async () => {
    try {
      const itemCart = {
        idProduct: product._id,
        quantity: pdQuantity
      }
      const response = await AxiosInstance().post(`/carts/add_to_cart/${user._id}`, itemCart);
      if (response.status) {
        ToastAndroid.show("Chúc mừng bạn đã thêm vào giỏ hàng thành công", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Oops. Xảy ra lỗi rồi. Thử lại nhé :3", ToastAndroid.SHORT);
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

  function onCart() {
    navigation.navigate("Cart");
  }

  return (
    <View style={ast.container}>
      {
        product && <Header onLeft={onLeft} iconL={require('../assets/images/iconBack.png')} content={product.name} iconR={require('../assets/images/shopping-cart.png')} onRight={onCart} />
      }
      <View style={dts.viewImg}>
        <Slider ArrImg={ArrImg} />
      </View>

      <View style={[dts.container1]}>
        <View style={dts.itemContainer}>
          <Text style={dts.itemName}>{product.category}</Text>
          <Text style={dts.itemName}>{product.type}</Text>
        </View>
        <View style={dts.viewText}>
          <Text style={dts.textPrice}>{product.price} đ</Text>
          <TextborderUnder content={'Chi tiết sản phẩm'} color={Color.color3A3A3A} size={16} font={'Poppins-Medium'} />
          <ViewDetail content1={'Kích cỡ'} content2={product.size} />
          <ViewDetail content1={'Xuất xứ'} content2={product.origin} />
          <ViewDetail content1={'Tình trạng'} content2={`Còn ${product.quantity} sp`} color={Color.color007537} />
        </View>
      </View>

      <View style={[dts.container2]}>
        <View style={dts.view1}>
          <View>
            <Text style={dts.text1}>Đã chọn {pdQuantity} sản phẩm</Text>
            <View style={dts.viewQuatity}>
              <Pressable onPress={increaseQuantity}>
                <Image source={require('../assets/images/plus.png')} style={dts.iconImg} />
              </Pressable>
              <Text style={dts.text3}>{pdQuantity}</Text>
              <Pressable onPress={decreaseQuantity}>
                <Image source={require('../assets/images/minus.png')} style={dts.iconImg} />
              </Pressable>
            </View>
          </View>
          <View>
            <Text style={[dts.text1, { textAlign: 'right' }]}>Tạm tính</Text>
            <Text style={dts.text2}>{totalPrice}đ</Text>
          </View>
        </View>
        <Buttons onPress={addtoCart} content={"CHỌN MUA"} />
      </View>
    </View>
  )
}

export default ProductDetail