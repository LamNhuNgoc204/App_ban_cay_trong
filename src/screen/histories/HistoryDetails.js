import { View, Text } from 'react-native'
import React from 'react'
import ast from '../../styles/AppStyles'
import hst from '../../styles/HistoryStyles'
import Header from '../../common/Header'
import TextborderUnder from '../../common/TextborderUnder'
import Color from '../../styles/Color'
import TextHisDetail from '../../common/TextHisDetail'
import Buttons from '../../common/Buttons'

const HistoryDetails = (props) => {
    const { navigation } = props;
  
    function onLeft() {
      navigation.goBack();
    }
    return (
        <View style={ast.container}>
            <Header iconL={require('../../assets/images/iconBack.png')} content={"LỊCH SỬ GIAO DỊCH"} onLeft={onLeft}/>
            <View style={hst.container}>
                <View style={hst.viewText}>
                    <Text style={hst.text1}>Bạn đã đặt hàng thành công</Text>
                    <Text style={hst.text1}>03/09/2021</Text>
                </View>
                <View style={hst.viewText2}>
                    <TextborderUnder content={'Thông tin khách hàng'} color={Color.color221F1F} size={16} font={'Lato-Bold'} width={'100%'} />
                    <TextHisDetail content={"Trần Minh Trí"} />
                    <TextHisDetail content={"tranminhtri@gmail.com"} />
                    <TextHisDetail content={"60 Láng Hạ, Ba Đình, Hà Nội"} />
                    <TextHisDetail content={"0193473554"} />
                </View>
                <View style={hst.viewText2}>
                    <TextborderUnder content={'Phương thức vận chuyển'} color={Color.color221F1F} size={16} font={'Lato-Bold'} width={'100%'} />
                    <TextHisDetail content={"Giao hàng nhanh - 15.000đ"} marginT={15} />
                    <TextHisDetail content={"(Dự kiến giao hàng 5-7/9)"} marginT={5} />
                </View>
                <View style={hst.viewText2}>
                    <TextborderUnder content={'Hình thức thanh toán'} color={Color.color221F1F} size={16} font={'Lato-Bold'} width={'100%'} />
                    <TextHisDetail content={"Thẻ VISA/MASTERCARD"} marginT={15} />
                </View>
                <View style={hst.viewText2}>
                    <TextborderUnder content={'Đơn hàng đã chọn'} color={Color.color221F1F} size={16} font={'Lato-Bold'} width={'100%'} />
                </View>
            </View>

            <View style={hst.container2}>
                <View style={hst.view1}>
                    <Text style={hst.text2}>Đã thanh toán</Text>
                    <Text style={hst.text2}>515.000đ</Text>
                </View>
                <Buttons content={"Xem Cẩm nang trồng cây"} />
                <View style={hst.viewPre}>
                    <Text style={hst.textPrev}>Quay về trang chủ</Text>
                </View>
            </View>
        </View>
    )
}

export default HistoryDetails