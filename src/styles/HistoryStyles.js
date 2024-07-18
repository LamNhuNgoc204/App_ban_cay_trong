import { StyleSheet } from "react-native";
import Color from "./Color";

export default hsrt = StyleSheet.create({
    container: {
        paddingHorizontal: 48,
        width: '100%',
        // height: '100%'
    },
    viewText: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15
    },
    text1: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: Color.color007537,
        marginVertical: 1
    },
    viewText2: {
        paddingVertical: 15
    },
    textgray: {
        color: Color.color7D7B7B,
        fontSize: 14,
        fontFamily: 'Lato-Regular'
    },
    container2: {
        paddingHorizontal: 24,
        // backgroundColor: 'red'
        paddingVertical: 15
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingVertical: 5
    },
    text2: {
        fontFamily: 'Lato-Bold',
        color: Color.color221F1F,
        fontSize: 16,
    },
    viewPre: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textPrev: {
        fontFamily: 'Lato-Bold',
        color: Color.color221F1F,
        fontSize: 16,
        textAlign: 'center',
        borderBottomColor: Color.color221F1F,
        borderBottomWidth: 0.5,
        width: 140
    }
})