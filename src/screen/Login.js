import { Alert, Image, ImageBackground, Pressable, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'; import st from '../styles/LoginStyle';
import TextBold from '../common/TextBold'; import TextRegular from '../common/TextRegular'
import TextInputLog from '../common/TextInputLog'; import ast from '../styles/AppStyles';
import Text12 from '../common/TextMedium'; import Color from '../styles/Color';
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../api/UserApi";

const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState(''); //"ngocne@gmail.com"
  const [EmailBlur, setEmailBlur] = useState(false);
  const [EmailForCus, setEmailForCus] = useState(false);
  const [passWord, setPassWord] = useState(''); //"ngocNe@123"
  const [PassWordBlur, setPassWordBlur] = useState(false);
  const [PassWordForCus, setPassWordForCus] = useState(false);
  const [Remember, setRemember] = useState(false);
  const [mailError, setMailError] = useState('');
  const [passError, setPassError] = useState('');

  function onChangeMail(text) { setEmail(text) };
  function onFocusEmail() { setEmailForCus(true); }
  function onBlurEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.trim() == "") {
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
    if ((!passwordRegex.test(passWord) && passWord.length < 6) || passWord.trim() == "") {
      setPassWordBlur(true);
      setPassError("Vui lòng không để trống PassWord, password ít nhất 6 kí tự, bao gồm các kí tự đặc biệt va so!");
      return;
    }
    setPassError('');
    setPassWordBlur(false);
  }

  const handleRegister = () => { navigation.navigate("Register") }

  const useAppDispatch = () => useDispatch();
  const dispatch = useAppDispatch();
  const useAppSelector = useSelector;
  const appState = useAppSelector((state) => state.app);

  const handleLogin = async () => {
    try {
      const body = {
        email: email,
        password: passWord
      }
      if (!email || !passWord) {
        ToastAndroid.show('Khong de trong form', ToastAndroid.SHORT)
        return;
      }
      // console.log(body);
      console.log("user ìnformation =>>>>", appState.user);
      dispatch(logIn(body));
      ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT)
    } catch (error) {
      ToastAndroid.show('Đăng nhập failed', ToastAndroid.SHORT)
    }
  }

  return (
    <View style={[ast.spaceB, ast.container, ast.aligncenter]}>
      <Image style={st.img1} source={require('../assets/images/bgDN.png')} />
      <View style={ast.center}>
        <TextBold text={"Chào mừng bạn"} />
        <TextRegular text={"Đăng nhập tài khoản"} />
      </View>

      <View style={st.viewInput}>
        <TextInputLog placeholder={'Nhập email hoặc số điện thoại'}
          value={email} onchange={setEmail} onFocus={onFocusEmail}
          onBlur={onBlurEmail}
        />
        {mailError && <Text style={{ color: 'red', fontSize: 10, marginBottom: 10 }}>Vui lòng nhập email hoặc số điện thoại để đăng nhập</Text>}
        <TextInputLog placeholder={'Mật khẩu'} value={passWord}
          onchange={setPassWord} onFocus={onFocusPassWord}
          onBlur={onBlurPassWord} img={require('../assets/images/hidepass.png')}
        />
        {passError && <Text style={{ color: 'red', fontSize: 10, marginBottom: 10 }}>Vui lòng nhập pass</Text>}
      </View>

      <View style={[ast.row, ast.spaceB, st.viewRemem]}>
        <View style={[ast.row]}>
          {
            Remember ? (<Image style={st.imgRemember} source={require('../assets/images/rememberS.png')} />)
              : (<Image style={st.imgRemember} source={require('../assets/images/remember.png')} />)
          }
          <Text12 content={'Nhớ tài khoản'} size={11} color={Color.color949090} />
        </View>
        <Text12 content={'Forgot Password ?'} size={11} color={Color.color009245} />
      </View>

      <ImageBackground resizeMode='cover' style={st.press} source={require('../assets/images/press.png')}>
        <Pressable style={{ width: '90%' }} onPress={() => handleLogin()}>
          <Text style={st.textPress}>Đăng nhập</Text>
        </Pressable>
      </ImageBackground>

      <View style={[ast.row, ast.rowsb, { marginTop: 15, marginHorizontal: 35 }]}>
        <View style={st.viewBorder} />
        <Text12 content={'Hoặc'} size={12} color={Color.color000} />
        <View style={st.viewBorder} />
      </View>

      <View style={[ast.row, ast.center, st.viewIcon]}>
        <Image style={st.icon} source={require('../assets/images/gg.png')} />
        <Image style={st.icon} source={require('../assets/images/face.png')} />
      </View>

      <View style={[ast.row, { marginBottom: 30 }]}>
        <Text12 content={"Bạn không có tài khoản?"} size={12} color={Color.color000} />
        <Pressable onPress={() => handleRegister()}>
          <Text12 content={"Tạo tài khoản"} size={12} color={Color.color009245} />
        </Pressable>
      </View>
    </View>
  )
}

export default Login