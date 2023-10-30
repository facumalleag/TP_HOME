import { StyleSheet } from "react-native";




export const cardStyle = StyleSheet.create({
    cardcontainer: {
        marginHorizontal: 5,
        backgroundColor: '#EAEAEA',
        height: 200,
        width: 224,
        marginBottom: 25,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    card: {
        position: 'absolute',
        width: 100,
        height: 100,
        bottom: -200,
    },
    datos: {
        color: '#1F4068',
        fontSize: 10,
        fontWeight: 'bold',
        bottom: -120,
        left: 5
    },
    actionBtnLeft: {
        borderRadius: 80,
        backgroundColor: '#B5CC2B',
        height: 30,
        width: 30,
        top: -50,
        left: 5,
        alignItems: 'center'
    },
    actionBtnRight: {
        borderRadius: 80,
        backgroundColor: '#1F4068',
        height: 30,
        width: 30,
        alignItems: 'center',
        position: 'relative',
        top: 4,
        right: -140
    },
    propImage: {
        height: 160,
        width: 150,
        position: 'absolute',
    }
})