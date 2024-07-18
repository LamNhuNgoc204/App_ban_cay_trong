import { View, Text, TextInput, Image } from 'react-native'
import React from 'react';
import st from '../styles/LoginStyle'
import Color from '../styles/Color';
import AppStyles from '../styles/AppStyles';


const TextInputLog = (props) => {
    const { img, placeholder, value, onchange, onFocus, onBlur } = props;

    return (
        <View style={[AppStyles.row, AppStyles.aligncenter]}>
            <TextInput placeholder={placeholder} placeholderTextColor={Color.color8B8B8B}
                value={value}
                onChangeText={(text) => onchange(text)}
                onFocus={onFocus}
                onBlur={onBlur}
                style={st.textInput}
            />

            {
                img ? (<Image style={st.iconPass} source={img} />) : (<View style={{ width: 0, height: 0 }} />)
            }
        </View>
    )
}

export default TextInputLog