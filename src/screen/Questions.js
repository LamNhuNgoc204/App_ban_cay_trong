import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../common/Header'
import ItemQues from '../items/ItemQues';
import ast from '../styles/AppStyles';
import qst from '../styles/QuestionsStyles';

const Questions = (props) => {
  const { navigation } = props;
  const [QuesAns, setQuesAns] = useState(data);

  function onLeft() {
    navigation.goBack();
  }
  
  return (
    <View style={ast}>
      <Header onLeft={onLeft} iconL={require('../assets/images/iconBack.png')} content={"Q & A"} />

      <ScrollView style={qst.scroll}>
        <View style={qst.container}>
          <FlatList data={QuesAns}
            renderItem={({ item }) => <ItemQues ques={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>

    </View>
  )
}

export default Questions
const data = [
  {
    id: 1,
    question: 'Tôi trộn các chất dinh dưỡng theo thứ tự nào?',
    answer: 'A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.'
  },
  {
    id: 2,
    question: 'Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?',
    answer: 'Dinh dưỡng cao cấp nên ko có hạn sử dụng, chỉ cần bảo quản tốt dưới nhiệt độ mát, tránh ánh sáng trực tiếp là sẽ để được rất lâu, Để duy trì mức dinh dưỡng tối ưu, chúng tôi khuyên bạn nên thay đổi hồ chứa thuỷ canh của bạn sau mỗi 7 ngày, còn với thổ canh thì pha lần nào tưới lần đó, thừa thì bỏ lần sau pha mới. Đặc biệt có vi sinh Mycorrhizae có hạn sử dụng sau 2 năm kể từ ngày mua.'
  },
  {
    id: 3,
    question: 'Khi nào tôi thêm bộ điều chỉnh pH?',
    answer: 'Sau khi bạn thêm A-F nhưng trước khi bạn thêm line E Root Igniter vào thì phải căn chỉnh pH trước rồi. PH tối ưu là giữa 5,8-6,3, nấm rễ phát triển tốt hơn khi pH chuẩn, dinh dưỡng đủ. Bạn cần thêm 1 số công cụ bút đo nữa nhé.'
  },
  {
    id: 4,
    question: 'Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?',
    answer: 'Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng nào trong dòng Nutrient của mình. Điều này bao gồm Paclobutrazol và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức khỏe khi con người ăn phải, đặc biệt là Ung Thư.'
  },
  {
    id: 5,
    question: 'Các sản phẩm Planta có phải là hữu cơ không?',
    answer: 'Các sản phẩm dinh dưỡng của chúng tôi là sự pha trộn của tất cả các thành phần hữu ' +
      'cơ và vô cơ tự nhiên, không chứa hormone, nước hoa, thuốc nhuộm hoặc chất điều hòa tăng ' +
      ' trưởng. Chúng đã được thiết kế đặc biệt để tối đa hóa khả dụng sinh học của các chất dinh dưỡng' +
      ' để hấp thụ và hiệu quả tối ưu. Chúng tôi hiểu được sự hấp thụ của một khu vườn hữu cơ. Quan trọng hơn,' +
      ' độ chính xác như vậy mang lại kết quả vượt trội với một giải pháp hoàn toàn hữu cơ. Chúng tôi tiếp tục phát triển các sản phẩm hữu cơ để thử nghiệm và sẽ cung cấp cho các thị trường dựa trên những kết quả chúng tôi thu thập được .'
  }
]