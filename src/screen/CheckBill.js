import { View, Text, ScrollView, Pressable, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'; import ast from '../styles/AppStyles';
import cb from '../styles/CheckBillStyles'; import Header from '../common/Header';
import Buttons from '../common/Buttons'; import Color from '../styles/Color';
import TextborderUnder from '../common/TextborderUnder'; import TextBill from '../common/TextBill';
import InputBill from '../common/InputBill'; import fds from '../styles/FindProductStyles';
import SweetAlert from 'react-native-sweet-alert';
import AxiosInstance from '../helper/AxiosInstance';
import { useSelector } from 'react-redux';


const CheckBill = (props) => {
  const { navigation } = props;
  const { product, totalPrice } = props.route.params;
  const [onPress1, setonPress1] = useState(true);
  const [onPress2, setonPress2] = useState(false);
  const [onPress3, setonPress3] = useState(true);
  const [onPress4, setonPress4] = useState(false);
  const [onFocus, setonFocus] = useState(false);
  const [onBlur, setonBlur] = useState(false);
  const [onFocus1, setonFocus1] = useState(false);
  const [onBlur1, setonBlur1] = useState(false);
  const useAppSelector = useSelector;
  const appState = useAppSelector((state) => state.app);
  const userId = appState.user._id;
  const user = appState.user;
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [titleShipping, setTitleShipping] = useState("");
  const [shipping, setShipping] = useState(0);
  const [payments, setPayment] = useState("");

  function handlePress() {
    if (setonPress1(!onPress1)) setonPress2(!onPress2)
    if (setonPress2(!onPress2)) setonPress1(!onPress1)
  }

  function handlePressCheck() {
    if (setonPress3(!onPress3)) setonPress4(!onPress4)
    if (setonPress4(!onPress4)) setonPress3(!onPress3)
  }

  useEffect(() => {
    if (onPress1) {
      setTitleShipping('Giao hàng Nhanh');
      setShipping(15000);
    } else if (onPress2) {
      setTitleShipping('Giao hàng COD');
      setShipping(20000);
    }
  }, [onPress1, onPress2])

  useEffect(() => {
    if (onPress3) {
      setPayment('Thẻ VISA/MASTERCARD');
    } else if (onPress4) {
      setPayment('Thẻ ATM');
    }
  }, [onPress3, onPress4])


  function onLeft() { navigation.goBack(); }

  function handleFocus() { setonFocus(!onFocus); }
  function handleOnBlur() { setonBlur(!onBlur) }
  function handleFocus1() { setonFocus1(!onFocus1); }
  function handleOnBlur1() { setonBlur1(!onBlur1) }



  //Thanh toán: http://localhost:8888/orders/payment/:iUser
  const payment = async () => {
    try {
      const pd = product.map((item) => {
        return {
          "productId": item.idProduct,
          "productName": item.name,
          "productType": item.type,
          "productPrice": item.price,
          "productQuantity": item.quantity,
          "productImage": item.images
        }
      })
      const data = {
        "products": pd,
        "shippingTitle": titleShipping,
        "shipping": shipping,
        "payment": payments
      }
      // console.log('data=>>', data);
      const response = await AxiosInstance().post(`/orders/payment/${userId}`, data);
      if (response.status) {
        SweetAlert.showAlertWithOptions({
          title: 'YEAH...',
          subTitle: 'Chúc mừng bạn đã thanh toán thành công :3!',
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#000',
          style: 'success',
          cancellable: true
        });
        navigation.navigate('BottomTab');
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


  return (
    <View style={ast.container}>
      <Header iconL={require('../assets/images/iconBack.png')} onLeft={onLeft} content={"THANH TOÁN"} />

      <View style={[cb.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={cb.viewInfo}>
            <TextborderUnder content={'Thông tin khách hàng'} color={Color.color221F1F} size={16} font={"Lato--Bold"} />
            <TextBill content={user.userName} />
            <TextBill content={user.email} />
            <InputBill content={"Địa chỉ"} value={address} onChange={setAddress} handleFocus={handleFocus} handleOnBlur={handleOnBlur} onFocus={onFocus} />
            {!address && <Text style={{color: 'red', fontSize: 10, margin: 10}}>Vui lòng nhập địa chỉ nhận hàng nheee</Text>}
            <InputBill content={"Số điện thoại"} value={phoneNumber} onChange={setPhoneNumber} type={"number-pad"} handleFocus1={handleFocus1} handleOnBlur1={handleOnBlur1} onFocus={onFocus1} />
          </View>

          <View style={cb.view2}>
            <TextborderUnder content={"Phương thức vận chuyển"} color={Color.color221F1F} size={16} font={"Lato-Bold"} />
            <Pressable style={[ast.row, ast.spaceB, cb.press]} onPress={() => handlePress()}>
              <View style={[cb.viewPress]}>
                <Text style={[cb.txt1, { color: onPress1 ? Color.color007537 : Color.color221F1F }]}>Giao hàng Nhanh - 15.000đ</Text>
                <Text style={cb.txt2}>Dự kiến giao hàng 5-7/9</Text>
              </View>
              {onPress1 ?
                (<Image source={require('../assets/images/check.png')} />)
                : (<View />)}
            </Pressable>
            <Pressable style={[ast.row, ast.spaceB, cb.press]} onPress={() => handlePress()}>
              <View style={[cb.viewPress]}>
                <Text style={[cb.txt1, { color: onPress2 ? Color.color007537 : Color.color221F1F }]}>Giao hàng COD - 20.000đ</Text>
                <Text style={cb.txt2}>Dự kiến giao hàng 4-8/9</Text>
              </View>
              {onPress2 ?
                (<Image source={require('../assets/images/check.png')} />)
                : (<View />)}
            </Pressable>
          </View>

          <View style={cb.view2} >
            <TextborderUnder content={"Hình thức thanh toán"} color={Color.color221F1F} size={16} font={"Lato-Bold"} />
            <Pressable onPress={() => handlePressCheck()} style={[ast.row, ast.spaceB, cb.press]}>
              <Text style={[cb.txt1, { color: onPress3 ? Color.color007537 : Color.color221F1F }]}>Thẻ VISA/MASTERCARD</Text>
              {onPress3 ?
                (<Image source={require('../assets/images/check.png')} />)
                : (<View />)}
            </Pressable>
            <Pressable onPress={() => handlePressCheck()} style={[ast.row, ast.spaceB, cb.press]}>
              <Text style={[cb.txt1, { color: onPress4 ? Color.color007537 : Color.color221F1F }]}>Thẻ ATM</Text>
              {onPress4 ?
                (<Image source={require('../assets/images/check.png')} />)
                : (<View />)}
            </Pressable>
          </View>

          <View style={cb.view2}>
            <TextborderUnder content={"Đơn hàng đã chọn"} color={Color.color221F1F} size={16} font={"Lato-Bold"} />
            {
              product.map((products, index) => {
                return (
                  <View style={[ast.row, fds.productCtContainer, cb.itemContainer]} key={index}>
                    <View style={fds.viewimg2}>
                      <Image source={{ uri: products.images }} style={fds.img2} />
                    </View>
                    <View style={fds.viewText2}>
                      <Text style={fds.text2}>{products.name} | <Text style={cb.txt1}>{products.type}</Text></Text>
                      <Text style={fds.text2}>{products.price}đ</Text>
                      <Text style={fds.text3}>Số lượng: {products.quantity} sản phẩm</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>

      <View style={cb.footer}>
        <View style={[ast.row, ast.spaceB]}>
          <Text style={cb.text1}>Tạm tính</Text>
          <Text style={cb.text1}>{totalPrice}đ</Text>
        </View>
        <View style={[ast.row, ast.spaceB]}>
          <Text style={cb.text1}>Phí vận chuyển</Text>
          <Text style={cb.text1}>{shipping}đ</Text>
        </View>
        <View style={[ast.row, ast.spaceB]}>
          <Text style={[cb.text1, { fontSize: 16 }]}>Tổng cộng</Text>
          <Text style={cb.text2}>{totalPrice + shipping}đ</Text>
        </View>
        <View style={cb.viewBt}>
          <Buttons onPress={payment} content={"TIẾP TỤC"} bgc={address.trim() !== "" && phoneNumber.trim() !== "" ? Color.color007537 : Color.colorABABAB} />
        </View>
      </View>

    </View>
  )
}

export default CheckBill