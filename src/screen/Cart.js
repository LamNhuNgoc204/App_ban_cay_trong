import { View, Text, FlatList, Modal, Pressable, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'; import ast from '../styles/AppStyles'
import Header from '../common/Header'; import cs from '../styles/CartStyles'
import ItCart from '../items/ItCart'; import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'; import AxiosInstance from '../helper/AxiosInstance'
import Buttons from '../common/Buttons'


const Cart = (props) => {
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);
  const useAppSelector = useSelector;
  const appState = useAppSelector((state) => state.app);
  const userId = appState.user._id;
  const [products, setProducts] = useState([]);
  const [length, setlength] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function onLeft() {
    navigation.goBack();
  }

  //Lấy chi tiết giỏ hàng
  // url: http://localhost:8888/carts/get_product_of_cart/6606556422c3c7682d5275bf
  const getProductOfCart = async () => {
    try {
      const response = await AxiosInstance().get(`/carts/get_product_of_cart/${userId}`);
      if (response.status) {
        setRefreshing(false); // Kết thúc quá trình làm mới
        setProducts(response.result.productId);
        setlength(true);
        setIsLoading(false); // Dữ liệu đã được tải về thanh cong
        setRefreshing(false);
        return;
      }
      if (products.length !== 0) {
        setlength(true);
      } else {
        setlength(false);
        setIsLoading(true);
      }
      setRefreshing(false);
    } catch (error) {
      setlength(false);
      setIsLoading(true);
      setRefreshing(false); // Kết thúc quá trình làm mới nếu có lỗi xảy ra
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oops. Đang xảy ra lỗi rồi. Bạn đợi một chút nhé <3",
      });
    }
  }

  useEffect(() => {
    getProductOfCart();
    return () => { }
  }, []);

  const [showFooter, setshowFooter] = useState(false);
  const [showModalDeleteAll, setshowModalDeleteAll] = useState(false);
  const [showModalDeleteOne, setshowModalDeleteOne] = useState(false);

  const showMdDelete = () => {
    setshowModalDeleteAll(!showModalDeleteAll);
  }

  //modal delete tất cả sản phẩm trong giỏ hàng
  const deleteAll = async () => {
    try {
      // http://localhost:8888/carts/delete_all_product_in_cart/65fc2fab513fbcabbcb298c3
      const response = await AxiosInstance().delete(`/carts/delete_all_product_in_cart/${userId}`);
      if (response.status) {
        setRefreshing(!refreshing);
        setProducts([]);
        setshowModalDeleteAll(!showModalDeleteAll);
        ToastAndroid.show("Xóa giỏ hàng thành công", ToastAndroid.SHORT);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Oops. Lỗi hệ thống mất rồi. Bạn thử lại nhé <3`,
        });
      }
      setRefreshing(!refreshing);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Oops. Đang xảy ra lỗi ${error} rồi. Bạn đợi một chút nhé <3`,
      });
    }
  }

  //Modal delate 1 sản phẩm
  const [idProductToDelete, setIdProductToDelete] = useState('');
  const showMdDeleteOne = (idProduct) => {
    setIdProductToDelete(idProduct);
    setshowModalDeleteOne(!showModalDeleteOne);
  }

  //url: http://localhost:8888/carts/delete_one_product_in_cart/6606556422c3c7682d5275bf
  const deleteOneItem = async () => {
    // console.log("idpd", idProductToDelete)
    try {
      const response = await AxiosInstance().delete(`/carts/delete_one_product_in_cart/${userId}`, { data: { idProduct: idProductToDelete } });
      if (response.status) {
        setshowModalDeleteOne(false);
        setProducts(products.filter((item) => item.idProduct !== idProductToDelete));
        ToastAndroid.show("Xóa sản phẩm thành công", ToastAndroid.SHORT);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Oops. Đang xảy ra lỗi rồi. Bạn vui lòng thử lại nhé <3"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Oops. Đang xảy ra lỗi ${error} rồi. Bạn đợi một chút nhé <3`
      });
    }
  }

  //Thanh toán
  const checkOut = () => {
    // console.log("======================", checkedProducts);
    navigation.navigate("CheckBill", { product: checkedProducts, totalPrice: totalPrice })
  }

  useEffect(() => {
    if (checkedProducts.length !== 0) {
      const total = checkedProducts.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [checkedProducts]);


  return (
    <View style={[ast.container, cs.container]}>
      <Header iconL={require('../assets/images/iconBack.png')} content={"GIỎ HÀNG"}
        iconR={require('../assets/images/delete.png')}
        onRight={() => showMdDelete()}
        onLeft={onLeft} />

      {isLoading ||
        !products.length ? (
        <Text onPress={() => navigation.navigate('BottomTab')} style={cs.text}>Giỏ hàng của bạn đang trống. Bắt đầu mua sắm ngay</Text>
      ) : (
        <View style={cs.viewFlat}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ItCart
                data={item}
                setRefreshing={setRefreshing}
                checkedProducts={checkedProducts}
                setCheckedProducts={setCheckedProducts}
                showMdDeleteOne={showMdDeleteOne}
                idProduct={item.idProduct}
                setshowFooter={setshowFooter}
              />
            )}
            keyExtractor={(item) => item.idProduct}
            onRefresh={() => setRefreshing(!refreshing)}
            refreshing={refreshing}
          />
        </View>
      )}

      {showFooter ?
        (<View style={cs.modalContainer}>
          <View style={cs.txtView}>
            <Text style={cs.text1}>Tạm tính</Text>
            <Text style={cs.text2}>{totalPrice}đ</Text>
          </View>
          <Pressable style={cs.press} onPress={checkOut}>
            <Text style={cs.textPress}>Tiến hành thanh toán</Text>
            <Image source={require('../assets/images/chevron-right.png')} style={cs.check} />
          </Pressable>
        </View>)
        : (<View />)
      }

      {/* DeleteAll */}
      <Modal
        style={cs.viewmodal}
        transparent={true}
        visible={showModalDeleteAll} // Sử dụng thuộc tính visible để điều khiển hiển thị của Modal
        animationType="fade" // Có thể sử dụng animationType để thay đổi hiệu ứng xuất hiện của Modal
      >
        <View style={cs.modalContent}>
          <Text style={cs.modalText}>Bạn xác nhận xóa tất cả sản phẩm luôn hỏ T~T</Text>
          <Text>Thao tác này sẽ không thể khôi phục</Text>
          <Buttons onPress={deleteAll} content={"Đồng ý"} />
          <Text onPress={showMdDelete}>Hủy bỏ</Text>
        </View>
      </Modal>

      {/* DeleteOne */}
      <Modal
        style={cs.viewmodal}
        transparent={true}
        visible={showModalDeleteOne} // Sử dụng state showModalDeleteOne để điều khiển hiển thị của Modal
        animationType="fade"
      >
        <View style={cs.modalContent}>
          <Text style={cs.modalText}>Bạn xác nhận sẽ xóa sản phẩm này hỏ 0^0 </Text>
          <Text>Thao tác này sẽ không thể khôi phục</Text>
          <Buttons onPress={() => deleteOneItem()} content={"Đồng ý"} />
          <Text onPress={showMdDeleteOne}>Hủy bỏ</Text>
        </View>
      </Modal>


    </View >
  )
}

export default Cart