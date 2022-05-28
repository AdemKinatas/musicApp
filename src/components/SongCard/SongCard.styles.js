import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        flex:1,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
    },
    imageContainer: {
        flex: 9,
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textContainer: {
        flex:16,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    innerTextContainer: {
        flexDirection: 'row',
    },
    artist: {
        flex: 3,
        color: 'black',
    },
    year: {
        flex:1,
        fontWeight: 'bold',
    },
    isSoldOutContainer: {
        flex: 8,
        justifyContent: 'center',
    },
    isSoldOut: {
        color:'red',
        fontSize: 15,
        borderWidth:1,
        borderColor:'red',
        borderRadius:5,
        padding:5,
        textAlign:'center',
        width: 75,
        height: 30,
    },
});