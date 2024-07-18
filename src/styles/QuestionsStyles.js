import { StyleSheet } from "react-native";
import Color from "./Color";

export default qas = StyleSheet.create({
    scroll: {
        height: '100%',
        // backgroundColor: 'red'
    },
    container: {
        marginHorizontal: 40,
        marginTop: 10,
    },
    itemContainer: {
        paddingVertical: 15
    },
    qes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textques: {
        fontFamily: 'Lato-Regular',
        color: Color.color000,
        fontSize: 16,
        width: '90%',
        fontWeight: '700'
    },
    press: {
        width: 24,
        height: 24,
    },
    img: {
        width: 24,
        height: 24
    },
    ans: {
        color: Color.color7D7B7B,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        paddingVertical: 15,
        lineHeight: 22
    },
    view: {
        width: 0,
        height: 0
    }
})