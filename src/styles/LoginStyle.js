import { StyleSheet } from "react-native";
import Color from "./Color";

export default st = StyleSheet.create({
    img1: {
        width: '100%',
        height: '45%'
    },
    textbold: {
        fontSize: 30,
        fontFamily: 'Poppins-Bold',
        color: Color.color000,
    },
    textregular: {
        color: Color.color000,
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        marginTop: -10
    },
    textInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Color.color8B8B8B,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        color: Color.color000,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginBottom: 10
    },
    viewInput: {
        width: '100%',
        paddingHorizontal: 25,
        marginTop: 10,
    },
    iconPass: {
        width: 29,
        height: 24,
        right: 40,
        bottom: 5
    },
    textSize12: {
        fontFamily: 'Poppins-Medium',
    },
    imgRemember: { width: 19, height: 19, marginRight: 10 },
    viewRemem: {
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 5
    },
    textPress: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        textAlign: 'center',
        color: Color.colorWhite
    },
    press: {
        width: 340,
        marginHorizontal: 25,
        marginTop: 10,
        borderRadius: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewBorder: {
        width: '40%',
        borderWidth: 0.5,
        borderColor: Color.color4CAF50,
        height: 1,
        // marginHorizontal: 10
    },
    view2: {
        marginTop: 15,
        marginHorizontal: 20,
        width: '80%',
        alignItems: 'center'
    },
    icon: {
        width: 32, 
        height: 32,
        marginHorizontal: 15
    },
    viewIcon: {
        marginVertical: 30,
        marginTop: 15
    },
    //Register
    img2: {
        width: '100%',
        height: 220
    },
    viewInput2: {
        width: '100%',
        paddingHorizontal: 25,
        marginTop: 5
    },
    text1: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: Color.color000,
        marginHorizontal: 25,
        textAlign: 'center',
    },
    view1: {
        marginTop: -25
    },
    button: {
        width: '90%'
    },
    viewText: {
        // marginBottom: 25,
        alignItems: "center",
        justifyContent: 'center'
    },
    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 10
    }
})