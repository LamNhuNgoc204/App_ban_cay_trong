import { View, Text, Image, Pressable, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'; import ast from '../styles/AppStyles'
import uds from '../styles/UpdateStyles'; import Header from '../common/Header'
import Color from '../styles/Color'; import InputGray from '../common/InputGray'
import Buttons from '../common/Buttons'; import { useSelector } from 'react-redux'
import AxiosInstance from '../helper/AxiosInstance'; import { launchImageLibrary } from 'react-native-image-picker';
import SweetAlert from 'react-native-sweet-alert';

const UpdateInfo = (props) => {
  const { navigation } = props;
  const { userss } = props.route.params;
  const useAppSelector = useSelector;
  const state = useAppSelector((state) => state.app);
  const user = userss;

  const [name, setName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [address, setaddress] = useState(user.address);
  console.log("--------------->", address);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber);
  const [avatar, setAvatar] = useState(user.avatar);

  const preset_key = 'pbwsooqe';
  const cloudName = 'dbxg5f4mt';
  //upload ảnh
  const handleEditAvatar = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 600,
      maxHeight: 600,
      quality: 1,
    }

    await launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log(response.assets[0]);
        const formData = new FormData();
        formData.append('upload_preset', preset_key);

        formData.append('file', {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName
        });
        let res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: 'post',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        console.log(responseJson.url);
        user.avatar = responseJson.url;
        setAvatar(responseJson.url);
      }
    });
  }

  console.log("avatar đây nè trời ơi TT => ", avatar);

  useEffect(() => {
    user.avatar = avatar;
    return () => {
    }
  }, [avatar])

  useEffect(() => {
    user.address = address;
    return () => {
    }
  }, [address])

  // console.log("avatar => ", user.avatar);

  function onLeft() {
    navigation.goBack();
  }
  const [textColor1, settextColor1] = useState("");

  //http://localhost:8888/users/updateinformation/65fc2fab513fbcabbcb298c3
  const handleUpdate = async () => {
    try {
      const newInfor = {
        email: email,
        name: name,
        address: address,
        avatar: avatar,
        phoneNumber: phoneNumber,
      }
      const response = await AxiosInstance().post(`users/updateinformation/${user._id}`, newInfor);
      if (response.status) {
        SweetAlert.showAlertWithOptions({
          title: 'YEAH...',
          subTitle: '<span style="color: blue;">Chúc mừng bạn yêu đã cập nhật thông tin thành công nè :3</span>',
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#000',
          style: 'success',
          cancellable: true,
        });
        console.log("newuser>", user)
      } else {
        ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show(`Xảy ra lỗi rồi nè => ${error}`, ToastAndroid.SHORT);
    }
  }

  console.log("address=>>>", address)

  return (
    <View style={ast.container}>
      <Header onLeft={onLeft} iconL={require('../assets/images/iconBack.png')} content={"CHỈNH SỬA THÔNG TIN"} />

      <View style={uds.container}>
        <View style={uds.container2}>
          <TouchableOpacity style={uds.viewAvatar} onPress={handleEditAvatar}>
            <Image source={{ uri: avatar ? avatar : "https://i.pinimg.com/564x/c3/9a/f4/c39af4399a87bc3d7701101b728cddc9.jpg" }}
              style={uds.imgAvatar} />
          </TouchableOpacity>
          <View style={uds.viewText}>
            <Text style={[uds.text1, { color: textColor1 ? textColor1 : Color.color221F1F }]} >Thông tin sẽ được lưu cho lần mua kế tiếp</Text>
            <Text style={uds.text1}>Bấm vào thông tin chi tiết để chỉnh sửa</Text>
          </View>

          <View>
            <InputGray onChange={setName} value={name} placeholder={name ? name : "Input your name..."} />
            <InputGray onChange={setEmail} value={email} placeholder={email} type={'email-address'} />
            <InputGray onChange={setaddress} value={address} placeholder={address ? address : "Input your address..."} />
            <InputGray onChange={setphoneNumber} value={phoneNumber} placeholder={phoneNumber ? phoneNumber : "Input your phone..."} type={'phone-pad'} />
          </View>
        </View>
        <View style={uds.viewButton}>
          <Buttons onPress={handleUpdate} content={"LƯU THÔNG TIN"} />
        </View>
      </View>

    </View>
  )
}

export default UpdateInfo