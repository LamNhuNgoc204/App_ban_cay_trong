import { View, Text, Image, Pressable, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'; import ast from '../styles/AppStyles'
import pfs from '../styles/ProfileStyles'; import Header from '../common/Header'
import TextProfile1 from '../common/TextProfile1'; import TextProfile2 from '../common/TextProfile2'
import { useDispatch, useSelector } from 'react-redux'; import { logout } from '../api/Reducer'
import AxiosInstance from '../helper/AxiosInstance';

const Profile = (props) => {
    const { navigation } = props;

    const appSelector = useSelector;
    const Appstate = appSelector((state) => state.app);
    const state = Appstate.user;
    const useAppDispatch = () => useDispatch();
    const dispatch = useAppDispatch();

    // console.log("userrrrrr=>>>", state);


    const [user, setuser] = useState({})

    useEffect(() => {
        const getInfor = async () => {
            try {
                const response = await AxiosInstance().post(`/users/user-detailt/${state._id}`);
                if (response.status) {
                    setuser(response.data);
                }
            } catch (error) {
                console.log('loi---------->', error);
            }
        }
        getInfor();
        return () => {
        }
    }, [user])
    // console.log("Lay user thanh cong", user);

    function onNext() {
        navigation.navigate("UpdateInfo", { userss: user });
    }

    const logOut = () => {
        dispatch(logout());
        ToastAndroid.show("Đăng xuất thành công =)))", ToastAndroid.SHORT);
    }

    return (
        <View style={[ast.container,]}>
            <Header content={"PROFILE"} />

            <View style={pfs.container}>
                <View style={[pfs.viewAvatar, ast.row]}>
                    <Image source={{ uri: user.avatar ? user.avatar : 'https://i.pinimg.com/564x/c3/9a/f4/c39af4399a87bc3d7701101b728cddc9.jpg' }} style={pfs.avatar} />
                    <View style={pfs.viewTxt}>
                        <Text style={pfs.txt1}>{user.userName}</Text>
                        <Text style={pfs.txt2}>{user.email}</Text>
                    </View>
                </View>

                <TextProfile1 content={"Chung"} />
                <Pressable onPress={() => onNext()}>
                    <TextProfile2 content={'Chỉnh sửa thông tin'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("HandBook")}>
                    <TextProfile2 content={'Cẩm nang trồng cây'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("History")}>
                    <TextProfile2 content={"Lịch sử giao dịch"} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Questions")}>
                    <TextProfile2 content={"Q & A"} />
                </Pressable>

                <TextProfile1 content={"Bảo mật và Điều khoản"} />
                <TextProfile2 content={"Điều khoản và điều kiện"} />
                <TextProfile2 content={"Chính sách quyền riêng tư"} />
                <Pressable onPress={() => logOut()}>
                    <Text style={pfs.txtDX}>Đăng xuất</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Profile