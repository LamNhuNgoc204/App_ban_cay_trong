import { StyleSheet } from "react-native";
import Color from "./Color";

export default hbs = StyleSheet.create({
    Containerr: {
        width: '100%',
        height: '100%'
    },
    viewSlide: {
        // marginHorizontal: 20,
        height: 270,
        width: '100%'
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 48,
        paddingVertical: 15,
        alignItems: 'center'
    },
    imgItem: {
        width: 57,
        height: 50,
        padding: 10,
        marginRight: 15
    },
    text1: {
        fontFamily: 'Lato-Regular',
        fontWeight: '600',
        fontSize: 16,
        color: Color.color000
    },
    text2: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: Color.color7D7B7B,
        marginTop: 3
    },
    viewFlat: {
        marginHorizontal: 48,
        marginTop: 15
    },
    //Item1
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: Color.color007537
    },
    imgIcon: {
        width: 24,
        height: 24
    },
    txtItem1: {
        color: Color.color000,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
    },
    press: {
        width: 24,
        height: 24,
    },
    //Item2
    container2: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text3: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: Color.color333333
    },
    //Item3
    text4: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: Color.color333333,
        lineHeight: 18,
        textAlign: 'justify'
    },
    //Item4
    text5: {
        fontFamily: 'Lato-Regular',
        color: Color.color333333,
        fontSize: 14
    }
})