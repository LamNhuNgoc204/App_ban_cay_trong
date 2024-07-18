import { StyleSheet } from "react-native";
import Color from "./Color";

export default uds = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: '85%'
    },
    container2: {
        paddingHorizontal: 48,
    },
    viewAvatar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    imgAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewText: {
        paddingVertical: 15, 
        marginBottom: 10
    },
    text1: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: Color.color221F1F,
        marginVertical: 1
    },
    press: {
        marginVertical: 15,
        backgroundColor: Color.color007537,
        borderRadius: 8,
        width: '100%'
    },
    viewButton: {
        marginHorizontal: 24,
    },
    textpress: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '600',
        color: Color.colorWhite,
        textAlign: 'center',
        paddingVertical: 15
    }
});