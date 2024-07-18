import { StyleSheet } from "react-native";
import Color from "./Color";

export default dts = StyleSheet.create({
    viewImg: {
        marginHorizontal: 20,
        height: 270,
        width: '90%'
    },
    img: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    iconPress: {
        width: 24,
        height: 24
    },
    viewTouch: {
        position: 'absolute',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%'
    },
    viewActive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    dots: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: '100%',
        // backgroundColor: 'green',
        height: 10,
        flexDirection: 'row'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Color.color7D7B7B,
        marginHorizontal: 3
    },
    dotActive: {
        width: 13,
        height: 13,
        borderRadius: 8,
        backgroundColor: Color.color007537
    },
    container1: {
        marginHorizontal: 40,
        marginTop: 10,
        // backgroundColor: 'red'
    },
    //Item
    itemContainer: {
        flexDirection: 'row',
    },
    itemName: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        textAlign: 'center',
        color: Color.colorWhite,
        backgroundColor: Color.color007537,
        paddingVertical: 5,
        paddingHorizontal: 8,
        marginRight: 10,
        borderRadius: 4,

    }, //end item
    viewText: {
        marginTop: 10,
    },
    textPrice: {
        paddingVertical: 15,
        fontSize: 24,
        color: Color.color007537,
        fontFamily: 'Lato-Regular',
        fontWeight: '600'
    },
    viewContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        borderBlockColor: Color.colorABABAB,
        borderBottomWidth: 0.55,
        paddingBottom: 5
    },
    text1: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: Color.color3A3A3A
    },
    container2: {
        marginHorizontal: 24
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    text1: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: Color.color000,
        marginBottom: 7
    },
    viewQuatity: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text2: {
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        color: Color.color221F1F
    },
    text3: {
        color: Color.color000,
        fontSize: 16,
        fontFamily: 'Lato-Regular'
    }
})