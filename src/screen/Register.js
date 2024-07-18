import { Alert, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'; import st from '../styles/LoginStyle';
import TextBold from '../common/TextBold'; import TextRegular from '../common/TextRegular'
import TextInputLog from '../common/TextInputLog'; import ast from '../styles/AppStyles';
import Text12 from '../common/TextMedium'; import Color from '../styles/Color';
import AxiosInstance from '../helper/AxiosInstance';

const Register = (props) => {
  const { navigation } = props;
  const [Email, setEmail] = useState("");
  const [EmailBlur, setEmailBlur] = useState(false);
  const [EmailForCus, setEmailForCus] = useState(false);
  const [PassWord, setPassWord] = useState("");
  const [PassWordBlur, setPassWordBlur] = useState(false);
  const [PassWordForCus, setPassWordForCus] = useState(false);
  const [UserName, setUserName] = useState("");
  const [UserNameBlur, setUserNameBlur] = useState(false);
  const [UserNameForCus, setUserNameForCus] = useState(false);
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PhoneNumberBlur, setPhoneNumberBlur] = useState(false);
  const [PhoneNumberForCus, setPhoneNumberForCus] = useState(false);
  const [mailError, setMailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passError, setPassError] = useState('');

  function onFocusEmail() { setEmailForCus(true); }
  function onBlurEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email) || Email.trim() == "") {
      setEmailBlur(true);
      setMailError("Vui lòng nhập mail đúng định dạng và không được để trống mail!");
      return;
    }
    setMailError("")
    setEmailBlur(false);
  }
  function onFocusPassWord() { setPassWordForCus(true); }
  function onBlurPassWord() {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])[a-zA-Z\d!@#$%^&*()-_+=]{6,}$/;
    if ((!passwordRegex.test(PassWord) && PassWord.length < 6) || PassWord.trim() == "") {
      setPassWordBlur(true);
      setPassError("Vui lòng không để trống PassWord, it nhat 6 k tu, bao gom các kí tự đặc biệt va so!");
      return;
    }
    setPassError('');
    setPassWordBlur(false);
  }
  function onFocusUserName() { setUserNameForCus(true); }
  function onBlurUserName() {
    setUserNameBlur(true);
    if (UserName.trim() == "" || UserName.length === 0) {
      setNameError("Không được để trống name");
      return;
    }
    setNameError('');
    setUserNameBlur(false);
  }
  function onFocusPhoneNumber() { setPhoneNumberForCus(true); }
  function onBlurPhoneNumber() {
    const phoneNumberRegex = /^(?:0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-46-9])\d{7}$/; // Theo từng vùng miền ở Việt Nam
    if (!phoneNumberRegex.test(PhoneNumber) || PhoneNumber.trim() == "" || isNaN(PhoneNumber)) {
      setPhoneNumberBlur(true);
      setPhoneError("Vui lòng nhập số điện thoại là 10 số và không để trống ");
      return;
    }
    setPhoneError('');
    setPhoneNumberBlur(false);
  }

  const handleDN = () => { navigation.navigate("Login") };

  const handleDK = async () => {
    try {
      console.log('presss');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(Email) || Email.trim() == "") {
        Alert.alert("Vui lòng nhập mail đúng định dạng và không được để trống mail!");
        return;
      }
      if (UserName.trim() == "" || UserName.length === 0) {
        Alert.alert("Không được để trống name");
        return;
      }
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])[a-zA-Z\d!@#$%^&*()-_+=]{6,}$/;
      if (!passwordRegex.test(PassWord) || PassWord.length < 6 || PassWord.trim() == "") {
        Alert.alert("Vui lòng không để trống PassWord, it nhat 6 k tu, bao gom các kí tự đặc biệt!");
        return;
      }
      const phoneNumberRegex = /^(?:0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-46-9])\d{7}$/; // Theo từng vùng miền ở Việt Nam
      if (!phoneNumberRegex.test(PhoneNumber) || PhoneNumber.trim() == "" || isNaN(PhoneNumber)) {
        Alert.alert("Vui lòng nhập số điện thoại là 10 số và không để trống ");
        return;
      }
      const body = {
        email: Email,
        password: PassWord,
        name: UserName,
        phoneNumber: PhoneNumber
      }
      console.log(body);
      const response = await AxiosInstance().post("/users/signup", body);
      console.log("======>", response);
      // const result = await response.json();
      if (response) {
        navigation.navigate("Login");
        ToastAndroid.show("Register success", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Register failed", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log("Lỗi rồi nè =>>>", error);
    }
  };

  return (
    <ScrollView style={[ast.container]}>
      <Image style={st.img2} source={require('../assets/images/bgDK.png')} />
      <View style={[ast.center, st.view1]}>
        <TextBold text={"Đăng ký"} />
        <TextRegular text={"Tạo tài khoản"} />
      </View>

      <View style={st.viewInput2}>
        <TextInputLog placeholder={'Họ tên'}
          value={UserName} onchange={setUserName} onFocus={onFocusUserName}
          onBlur={onBlurUserName}
        />
        {nameError && <Text style={st.error}>{nameError}</Text>}

        <TextInputLog placeholder={'E-mail'} value={Email}
          onchange={setEmail} onFocus={onFocusEmail}
          onBlur={onBlurEmail}
        />
        {mailError && <Text style={st.error}>{mailError}</Text>}

        <TextInputLog placeholder={'Số điện thoại'} value={PhoneNumber}
          onchange={setPhoneNumber} onFocus={onFocusPhoneNumber}
          onBlur={onBlurPhoneNumber}
        />
        {phoneError && <Text style={st.error}>{phoneError}</Text>}

        <TextInputLog placeholder={'Mật khẩu'} value={PassWord}
          onchange={setPassWord} onFocus={onFocusPassWord}
          onBlur={onBlurPassWord}
        />
        {passError && <Text style={st.error}>{passError}</Text>}
      </View>

      <Text style={st.text1}>Để đăng ký tài khoản, bạn đồng ý <Text style={{ color: Color.color009245 }}>Terms & Conditions</Text> and <Text style={{ color: Color.color009245 }}>Privacy Policy</Text></Text>

      <ImageBackground resizeMode='cover' style={st.press} source={require('../assets/images/press.png')}>
        <Pressable style={st.button} onPress={() => handleDK()}>
          <Text style={st.textPress}>Đăng ký</Text>
        </Pressable>
      </ImageBackground>

      <View style={{ alignItems: 'center' }}>
        <View style={[ast.row, ast.spaceB, st.view2]}>
          <View style={st.viewBorder} />
          <Text12 content={'Hoặc'} size={12} color={Color.color000} width={30} />
          <View style={st.viewBorder} />
        </View>
      </View>

      <View style={[ast.row, ast.center, st.viewIcon]}>
        <Image style={st.icon} source={require('../assets/images/gg.png')} />
        <Image style={st.icon} source={require('../assets/images/face.png')} />
      </View>

      <View style={[ast.row, st.viewText]}>
        <Text12 content={"Bạn đã có tài khoản? "} size={12} color={Color.color000} />
        <Pressable onPress={() => handleDN()}>
          <Text12 content={" Đăng nhập"} size={12} color={Color.color009245} />
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Register
