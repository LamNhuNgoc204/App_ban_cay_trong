import { StyleSheet } from "react-native";
import Color from "./Color";

export default fpds = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        marginBottom: 30
    },
    viewInput: {
        borderBottomWidth: 1.5,
        borderBottomColor: Color.color221F1F,
        // backgroundColor: 'red'
    },
    img: {
        width: 24,
        height: 24
    },
    input: {
        width: '90%',
        color: Color.color221F1F,
    },
    flatKey: {
        marginTop: 30
    },
    flatsp: {
        marginTop: 20
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: Color.color000,
        fontWeight: '700'
    },
    //ItemKey
    itemkey: {
        width: '80%',
        color: Color.color221F1F,
        fontFamily: 'Lato-Regular',
        fontWeight: '300'
    },
    keyContainer: {
        marginTop: 10
    },
    //ItemProducts
    productContainer: {
        marginTop: 10
    },
    viewimg2: {
        width: '25%',
        height: 80,
        marginRight: 15,
        borderRadius: 8
    },
    img2: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    viewText2: {
        // marginVertical: 10,
        justifyContent: 'space-between'
    },
    text2: {
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
        fontSize: 16,
        color: Color.color000
    },
    text3: {
        fontSize: 14,
        color: Color.color000,
        fontFamily: 'Lato-Regular'
    }
})