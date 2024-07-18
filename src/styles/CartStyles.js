import { StyleSheet } from "react-native";
import Color from "./Color";

export default cs = StyleSheet.create({
    container: {
    },
    viewContainer: {
        paddingVertical: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        paddingTop: 20,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 14,
        color: Color.color007537,
        fontFamily: 'Lato-Regular',
        marginHorizontal: 30,
        textDecorationStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: Color.color007537,
        width: 'auto'
    },
    checkbox: {
        width: 24,
        height: 24,
        // backgroundColor: 'red'
    },
    img: {
        width: 77,
        height: 77,
        borderRadius: 8,
    },
    viewText: {
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: '50%'
    },
    textName: {
        fontSize: 16,
        color: Color.color000,
        fontFamily: 'Lato-Regular',
        fontWeight: '600'
    },
    textType: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: Color.color7D7B7B
    },
    textPrice: {
        color: Color.color007537,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '600',
        marginTop: 5
    },
    viewFlat: {
        // backgroundColor: 'red',
        width: '100%',
        height: '75%'
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewIcon: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },
    textQuatity: {
        color: Color.color000,
        fontSize: 14,
        fontFamily: 'Lato-Regular'
    },
    textDelete: {
        color: Color.color000,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
        borderBottomColor: Color.color221F1F,
        borderBottomWidth: 1
    },
    txtView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24
    },
    check: {
        width: 24,
        height: 24
    },
    press: {
        marginHorizontal: 24,
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: Color.color007537,
        marginTop: 10
    },
    modalContainer: {
        marginTop: 20
    },
    text1: {
        fontSize: 14,
        color: Color.color000,
        fontFamily: 'Lato-Regular'
    },
    text2: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '600',
        color: Color.color000
    },
    textPress: {
        fontFamily: 'Lato-Regular',
        fontWeight: '600',
        fontSize: 18,
        color: Color.colorWhite
    },
    //ModalDelete
    viewmodal: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: '145%',
        elevation: 10,
        borderRadius: 10
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
})