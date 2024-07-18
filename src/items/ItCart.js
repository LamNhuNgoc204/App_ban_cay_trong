import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'; import cs from '../styles/CartStyles'
import AxiosInstance from '../helper/AxiosInstance'; import { useSelector } from 'react-redux';
import SweetAlert from 'react-native-sweet-alert';

const ItCart = (props) => {
    const { data, setshowFooter, showMdDeleteOne, idProduct, checkedProducts, setCheckedProducts, setRefreshing } = props;
    const [isChecked, setIsChecked] = useState(false);
    const useAppSelector = useSelector;
    const state = useAppSelector((state) => state.app);
    const userId = state.user._id;
    const [productQuantity, setProductQuantity] = useState(data.quantity);
    const [lengthQuantity, setlengthQuantity] = useState(productQuantity > -1);
    console.log("so luong sp => ", productQuantity);

    const handlePress = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        if (isChecked) {
            // console.log("checked", isChecked);
            setCheckedProducts([...checkedProducts, data]);
        } else {
            setCheckedProducts(checkedProducts.filter(item => item.idProduct !== data.idProduct));
        }
    }, [isChecked]); // Sử dụng isChecked làm dependency
    // console.log(checkedProducts);

    useEffect(() => {
        // Kiểm tra nếu không còn sản phẩm nào được chọn, ẩn footer
        if (checkedProducts.length === 0) {
            setshowFooter(false);
        } else {
            setshowFooter(true);
        }
    }, [checkedProducts, setshowFooter]);

    //Update cart url: http://localhost:8888/carts/update_cart/:idUser
    const tangSL = async () => {
        setProductQuantity(a => a + 1);
        // console.log(productQuantity);
    }

    const giamSL = async () => {
        if (productQuantity === 1) {
            SweetAlert.showAlertWithOptions({
                title: '.....',
                subTitle: `Oops. Bạn có chắc chắn muốn xóa sản phẩm này không?`,
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#000',
                style: 'error',
                cancellable: true,
            }, () => {
                setProductQuantity(0);
                setRefreshing(true);
            });
            setRefreshing(false);
        } else {
            setProductQuantity(a => a - 1);

        }
        // console.log(productQuantity);
    }

    useEffect(() => {
        const updateQuantity = async () => {
            try {
                const productData = {
                    productId: data.idProduct,
                    quantity: productQuantity
                }
                const response = await AxiosInstance().put(`/carts/update_cart/${userId}`, productData);
                if (response.status) {
                    console.log("Cập nhật thành công")
                } else {
                    console.log("Cập nhật thất bại");
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
        updateQuantity();
        return () => { }
    }, [productQuantity])


    return (
        <View style={cs.viewContainer}>
            <TouchableOpacity onPress={handlePress} style={cs.checkbox}>
                <Image source={isChecked ? require('../assets/images/box.png') : require('../assets/images/boxS.png')} style={cs.checkbox} />
            </TouchableOpacity>
            <View>
                <Image source={{ uri: data.images && data.images }} style={cs.img} />
            </View>
            <View style={cs.viewText}>
                <View>
                    <Text style={cs.textName}>{data.name} | <Text style={cs.textType}>{data.type}</Text></Text>
                    <Text style={cs.textPrice}>{data.price}</Text>
                </View>
                <View style={cs.view1}>
                    <View style={cs.viewIcon}>
                        <TouchableOpacity onPress={giamSL}>
                            <Image source={require('../assets/images/minus.png')} style={cs.icon} />
                        </TouchableOpacity>
                        <Text style={cs.textQuatity}>{lengthQuantity && productQuantity}</Text>
                        <TouchableOpacity onPress={tangSL}>
                            <Image source={require('../assets/images/plus.png')} style={cs.icon} />
                        </TouchableOpacity>
                    </View>
                    <Pressable onPress={() => showMdDeleteOne(idProduct)}>
                        <Text style={cs.textDelete}>Xóa</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ItCart