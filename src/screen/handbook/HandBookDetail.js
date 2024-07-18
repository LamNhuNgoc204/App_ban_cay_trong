import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../common/Header'
import Slider from '../../common/Slider'
import ItDetail from '../../items/ItDetail'
import dts from '../../styles/DetailStyles'
import hbs from '../../styles/HandBookStyles'
import ItemText1 from '../../items/handbooks/ItemText1'

const HandBookDetail = (props) => {
    const { navigation } = props;
  
    function onLeft() {
      navigation.goBack();
    }
    const [ArrImg, setArrImg] = useState(images);
    const [ArrType, setArrType] = useState(types);
    const [ArrNote, setArrNote] = useState(notes);

    return (
        <View>
            <Header iconL={require('../../assets/images/iconBack.png')} content={"Black Pause"} onLeft={onLeft}/>

            <ScrollView style={hbs.Containerr}>
                <View style={hbs.viewSlide}>
                    <Slider ArrImg={ArrImg} />
                </View>

                <View style={[dts.container1]}>
                    <FlatList data={ArrType}
                        horizontal={true}
                        renderItem={({ item }) => <ItDetail type={item} />}
                        keyExtractor={(item) => item.id} />
                </View>

                <View style={hbs.viewFlat}>
                    <FlatList data={ArrNote}
                        scrollEnabled={false}
                        renderItem={({ item }) => <ItemText1 txt1={item} />}
                        keyExtractor={(item) => item.id} />
                </View>
            </ScrollView>

        </View>
    )
}

export default HandBookDetail

const images = [
    'https://i.pinimg.com/564x/6c/4e/14/6c4e14156f43bd4921bdec44745d85e3.jpg',
    'https://i.pinimg.com/736x/3e/78/01/3e7801fa5a1b3d381014ca28786610b7.jpg',
    'https://i.pinimg.com/564x/fb/e6/bf/fbe6bf37aa5cdd1df76a10e7ffef5c5c.jpg'
];

const types = [
    {
        id: 1,
        name: 'Cây trồng'
    },
    {
        id: 2,
        name: 'Ưa bóng'
    }
]

const notes = [
    {
        id: 1,
        name: 'Kiến thức cơ bản',
        stage: [
            {
                id: 1,
                name: 'Bước 1: Chuẩn bị vật dụng, chất trồng',
                contents: [
                    {
                        id: 1,
                        content: '- Chậu nhỏ hoặc chậu to nếu sau này không muốn thay chậu nữa) hoặc khay ươm nếu gieo số lượng nhiều. Dù bạn dự tính trồng thẳng trong chậu hoặc sẽ chuyển xuống đất trồng thì cũng nên uơm hạt trong chậu trước vì dễ quản lí đô ẩm, sâu bệnh, dinh dưỡng…',
                    },
                    {
                        id: 2,
                        content: '- Thuốc trừ nấm: Thuốc trừ nấm cũng là 1 phần không thể thiếu trong khâu chuẩn bị. Nó giúp hạn chế các loại nấm mốc có hại cho hạt giống ảnh hưởng tới cây trồng của bạn sau này.',
                    },
                    {
                        id: 3,
                        content: '- Đất trồng: Theo phản ảnh và kinh nghiệm thực tế của các nhà vườn, gieo hạt bằng hỗn hợp cám dừa + tro trấu (tỷ lệ 7:3. thậm chí 100% cám dừa) có kết quả tốt hơn gieo hạt bằng đất sạch. Tuy nhiên cám dừa cần ngâm xả nhiều lần cho hết chất tanin (màu vàng nâu) mới sử dụng được, tro trấu cũng nên ngâm xả nhiều lần để bớt muối.',
                    },
                    {
                        id: 4,
                        content: '- Tủ Trồng',
                    },
                    {
                        id: 5,
                        content: '- Điều Hòa Độ Ẩm'
                    }
                ]
            },
            {
                id: 2,
                name: 'Bước 2: Tiến hành gieo hạt',
                contents: [
                    {
                        id: 1,
                        content: '- Chuẩn bị chất trồng: Chất trồng sau khi trộn đều, chúng ta cho vào chậu hoặc khay uơm.Tưới đẫm chất trồng.Phun thuốc trừ nấm lên mặt chất trồng(bước này rất quan trọng).Tốt nhất phun liên tục 2 - 3 lần để thuốc thấm xuống sâu hơn.',

                    },
                    {
                        id: 2,
                        content: '- Ngâm hạt giống: Đối với các loại hạt có vỏ mỏng(như cà, ớt…) có thể ngâm bằng nước ấm khoảng 5 - 8 tiếng.Đối với các loại hạt có vỏ dày(như các loại đậu, bầu, khổ qua…) thì nên ngâm bằng nước ấm(nguyên tắc pha nước 7 lạnh 3 nóng) ngâm 1 đêm cho vỏ hạt nở ra rồi hãy tiến hành gieo(cho nên bước này phải thực hiện có kế hoạch và làm trước các bước chuẩn bị)',
                    },
                    {
                        id: 3,
                        content: '- Ủ hạt giống: Sau khi ngâm hạt giống cây trồng, tiến hành ủ hạt(tùy loại hạt, có loại cần ủ vài tiếng, 1 hoặc nhiều ngày), cũng có loại hạt không cần ngâm ủ.',
                    },
                    {
                        id: 4,
                        content: '- Chú ý: Đối với các loại hạt khó nảy mầm như các loại huơng thảo, oải huơng thì khuyến khích sử dụng GA3, Atonik(chất kích thích nẩy mầm) để tăng tỷ lệ nẩy mầm(nhưng phải nắm rõ nồng độ và thời gian xử lý, nếu dùng quá liều có thể làm chết hạt.)',
                    },
                    {
                        id: 5,
                        content: '- Gieo hạt: Nguyên tắc gieo hạt là chôn hạt với độ sâu bằng 2 - 3 lần đường kính của hạt.Đối với các loại hạt rất nhỏ, thì chúng ta gieo trực tiếp trên mặt đất ẩm, sau đó phun suơng cho hạt bám vào chất trồng là được.Đối với hạt to hơn thì nên chôn' +
                            ' sâu khoảng 1 - 2cm(chú ý ko nén đất quá chặt sau khi chôn hạt).Sau khi gieo hạt xong nên phun sương lên bề mặt vài lần để đất và hạt tiếp xúc với nhau.Đặc biết đối với các hạt xứ lạnh, sau khi gieo hạt nên xử dụng màng thực phẩm, hay tấm kiếng đậy lại chậu hoặc khay uơm để tăng độ ẩm(đặt chậu nơi ít nắng), giúp hạt nảy mầm nhanh hơn.Các loại hạt xứ nóng không cần thực hiện bước này.'
                    },

                ]
            },
            {
                id: 3,
                name: 'Bước 3: Chăm sóc sau khi gieo hạt',
                contents: [
                    {
                        id: 1,
                        content: ' - Nhiệt độ: Tùy loại mà hạt cần nhiệt độ khác nhau để nẩy mầm, tuy nhiên dao động từ khoảng 20-25 độ C thích hợp cho đại đa số hạt.',
                    },
                    {
                        id: 2,
                        content: '- Độ ẩm của đất trồng: Chú ý luôn đảm bảo độ ẩm cho đất, không được để đất bị khô. Bao lâu phun 1 lần thì phụ thuộc vào nhiều yếu tố nơi gieo hạt giống cây trồng(nhiệt độ, sức gió…). Vấn đề này đòi hỏi bạn phải có kinh nghiệm và quan sát thường xuyên.',
                    },
                    {
                        id: 3,
                        content: '- Đặt chậu hoặc khay ươm ở nơi có ánh sáng khuyếch tán (che lưới lan màu đen loại 50%)' +
                            'Vì hạt cần ánh sáng để nẩy mầm, nhưng nếu cường độ quá mạnh sẽ đốt cháy hạt và làm khô chất trồng nhanh chóng. Cũng có 1 số ít (rất ít) loại cần gieo hạt ở nơi râm mát.',
                    },
                    {
                        id: 4,
                        content: '- Thay chậu hoặc chuyển vào đất trồng: Khi cây con đã lớn đến mức độ nào đó (thân đủ cứng cáp, rễ mạnh…), chúng ta có thể chuyển qua chậu to hơn hoặc chuyển xuống đất trồng trực tiếp. Nếu trước đó đã gieo hạt trong chậu to thì có thể trồng tiếp mà không cần sang chậu. Chú ý bón lót phân hữu cơ vào đất trồng.',
                    },
                    {
                        id: 5,
                        content: '- Bón phân: Đối với cây con, hệ rễ vẫn chưa đủ mạnh để hấp thụ phân có nồng độ cao, cho nên việc dùng phân bón lá là thích hợp nhất. Thông thường chỉ nên tưới phân bón lá bằng 1/2 hoặc 2/3 nồng độ trên bao bì hướng dẫn.',
                    },
                    {
                        id: 6,
                        content: '- Sâu bệnh: Giai đoạn cây con phải chú ý quan sát thường xuyên vì rất dễ bị sâu ăn lá tấn công. Chúng ta nên phun thuốc trừ nấm, trừ sâu (dạng vi sinh) 1 tuần 1 lần. Ngoài ra cũng chú ý đất trồng không được để úng tránh cây bị thối.'
                    }

                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Các giai đoạn',
        stage: [
            {
                id: 1,
                name: 'Ngâm Hạt và Ủ Hạt (48 tiếng)',
                content: [
                    {
                        id: 1,
                        content: '+ Cần ngâm hạt vào nước sạch khoảng 48 tiếng, thay nước mỗi 24 tiếng',
                    },
                    {
                        id: 2,
                        content: '+ Hạt đã hút no nước trong thời gian trên vớt ra và ủ khô trong 24 tiếng'
                    }
                ]
            },
            {
                id: 2,
                name: 'Nảy mầm (3-5 ngày',
                content: [
                    {
                        id: 1,
                        content: '- Điều kiện nảy mầm: 25 - 28 độ C',
                        content2: [
                            { id: 1, nd: '+ Độ ẩm: 25 - 35 %' },
                            { id: 2, nd: '+ Ánh sáng: 8h / ngày' },
                            { id: 3, nd: '+ Đất: đất mùn' },
                            { id: 4, nd: '+ Phân bón: phân động vật ủ ít nhất 3 tháng' },
                            { id: 5, nd: '+ Tỉ lệ phân x đất nền: 3x7' },
                            { id: 6, nd: '+ Dinh dưỡng: Elite Nutrition A' }

                        ]
                    },
                    {
                        id: 2,
                        content: '- Lưu ý:',
                        content2: [
                            { id: 1, nd: '+ Giai đoạn nhạy cảm khi thêm nước cần nhẹ tay hoặc tưới gốc.' },
                            { id: 2, nd: '+ Cần đảm bảo lượng không khí, chủ yếu là oxy cho mầm và rễ phát triển.' },
                            { id: 3, nd: '+ Nên sử dụng ly nhựa nhỏ đục lỗ dưới đáy ly để thoát nước và khí cho bộ rễ.' },
                            { id: 4, nd: '+ Chiều cao: từ 10 - 20cm' }
                        ]
                    }

                ]
            },
            {
                id: 3,
                name: 'Bắt Đầu Phát Triền (2-3 tuần)',
                content: [
                    {
                        id: 1,
                        content: '- Điều kiện phát triển: 20 - 27 độ C',
                        content2: [
                            { id: 1, nd: '+ Độ ẩm: 30 - 40 %' },
                            { id: 2, nd: '+ Ánh sáng: 10 / ngày' },
                            { id: 3, nd: '+ Cần 1 thìa phốt pho để phát triển bộ rễ' },
                            { id: 4, nd: '+ Dinh Dưỡng: Elite Nutrition B' }
                        ]
                    },
                    {
                        id: 2,
                        content: '- Lưu ý: Giai đoạn cây phát triển thành cây lớn',
                        content2: [
                            { id: 1, nd: '+ Tùy từng loại hạt sẽ có từ 2 - 4 lá mầm ban đầu, rối sẽ phát triển thành 5 - 7 - 9 nhánh tùy chất lượng hạt' },
                            { id: 2, nd: '+ Sử dụng chậu nhỏ có trộn đất mùn hoặc đất sạch tribat' }
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: 'Trưởng Thành (4-6 tuần)',
                content: [
                    {
                        id: 1,
                        content: '- Điều kiện trưởng thành:',
                        content2: [
                            { id: 1, nd: '+ 24 - 27 độ C' },
                            { id: 2, nd: '+ Độ ẩm: 30 - 40 %' },
                            { id: 3, nd: '+ Ánh sáng: 6h / ngày' },
                            { id: 4, nd: '+ Thêm Elite Nutrition C vào nước khi tưới(tỉ lệ 1: 9)' }
                        ]
                    },
                    {
                        id: 2,
                        content: ' - Lưu ý: Giai đoạn phát triển có cấu trúc thân, cành, lá khỏe mạnh để nâng đỡ cụm hoa / quả.Cây lớn nhanh về chiều cao từ 50cm - 70m' +
                            'Rễ phát triển lớn, nếu chậu không đủ to hãy chuyển sang chậu lớn hơn.'
                    }
                ]
            },
            {
                id: 5,
                name: 'Ra Hoa (4-6 tuần)',
                content: [
                    {
                        id: 1,
                        content: '- Điều kiện ra hoa:',
                        content2: [
                            { id: 1, nd: '+ 24-30 độ C' },
                            { id: 2, nd: '+ Độ ẩm: 50-55%' },
                            { id: 3, nd: '+ Ánh sáng:12h/ngày' },
                            { id: 4, nd: '+ Thêm Elite Nutrition D vào nước khi tưới (tỉ lệ 1:9)' },
                        ]
                    },
                    {
                        id: 2,
                        content: ' - Lưu ý: Cần tỉa bớt lá to và cấu ngọn để cây có thể ra hoa. ',
                        content2: [
                            { id: 1, nd: '+ Ánh sáng cực kì quan trọng tại giai đoạn này.' },
                            { id: 2, nd: '+ Cần theo dõi các nhánh để tránh tình trạng bông quá nặng các nhánh không chịu nổi sẽ phải dùng biện nâng đỡ.' },
                        ]
                    }
                ]
            }
        ]
    }
]