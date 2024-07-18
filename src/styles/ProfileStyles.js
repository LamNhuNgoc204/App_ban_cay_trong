import { StyleSheet } from "react-native";
import Color from "./Color";

export default pfs = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginRight: 10,
        marginBottom: 30
    },
    viewAvatar: {
        paddingTop: 15,
        paddingBottom: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    viewTxt: {
        justifyContent: 'space-between'
    },
    txt1: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
        color: Color.color000
    },
    txt2: {
        color: Color.color7F7F7F,
        fontFamily: 'lato-Regular',
        fontSize: 14,
    },
    txtChung: {
        fontSize: 16,
        color: Color.color7F7F7F,
        fontFamily: 'Lato-Regular',
        marginTop: 30,
        borderBottomColor: Color.colorABABAB,
        borderBottomWidth: 1,
        paddingBottom: 3
    },
    txtBold: {
        color: Color.color000,
        fontSize: 16,
        fontWeight: '800',
        fontFamily: 'Lato-Regular',
        marginTop: 15
    },
    txtDX: {
        color: Color.colorFF0000,
        fontSize: 16,
        fontWeight: '800',
        fontFamily: 'Lato-Regular',
        marginTop: 15
    }
})