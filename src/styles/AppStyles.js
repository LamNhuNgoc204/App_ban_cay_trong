import { StyleSheet } from "react-native";
import Color from "./Color";
export default ast = StyleSheet.create({
    container: {
        // width: '100%',
        // height: '100%',
        backgroundColor: Color.colorWhite,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bgContainer: {
        backgroundColor: Color.colorWhite
    },
    aligncenter: {
        alignItems: 'center'
    },
    spaceB: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jusCenter: {
        justifyContent: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -15
    },
    textborderUnder: {
        borderBottomColor: Color.color221F1F,
        borderBottomWidth: 1, 
        paddingBottom: 5
    },
    //Common inputgray
    inputGray: {
        color: Color.color221F1F,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        paddingBottom: 5
    },
    viewGray: {
        marginTop: 10,
        borderBottomWidth: 0.55,
        width: '100%',
        borderBottomColor: Color.colorABABAB
    }
})