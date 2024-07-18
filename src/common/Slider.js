import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import dts from '../styles/DetailStyles';

const Slider = (props) => {
    const { ArrImg } = props;
    // const [ArrImg, setArrImg] = useState(images);
    const [currentIndex, setcurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentIndex((currId) => {
                return (
                    (currId === ArrImg.length - 1) ? 0 : currId + 1
                );
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [currentIndex]);

    function handleNext() {
        setcurrentIndex((currId) => {
            return (currId === ArrImg.length - 1) ? 0 : currId + 1;
        })
    }

    function handlePrev() {
        setcurrentIndex((currId) =>
            (currId === 0) ? ArrImg.length - 1 : currId - 1
        )
    }

    return (
        <View>
            {ArrImg && ArrImg[currentIndex] && <Image style={dts.img} source={{ uri: ArrImg[currentIndex] }} />}

            <View style={dts.viewTouch}>
                <View />
                <View style={dts.viewActive}>
                    <TouchableOpacity onPress={() => handlePrev()}>
                        <Image source={require('../assets/images/arrow-left.png')} style={dts.iconPress} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNext()}>
                        <Image source={require('../assets/images/arrow-right.png')} style={dts.iconPress} />
                    </TouchableOpacity>
                </View>
                <View style={dts.dots}>
                    { ArrImg &&
                        ArrImg.map((element, index) => {
                            return (
                                <Pressable
                                    key={index}
                                    style={[dts.dot, index === currentIndex && dts.dotActive]}
                                    onPress={() => setcurrentIndex(index)}
                                ></Pressable>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default Slider