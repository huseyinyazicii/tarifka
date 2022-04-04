import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    image: {
        height: Dimensions.get('window').height  / 3,
        width: Dimensions.get('window').width ,
    },
    title: {
        color: '#b71c1c',
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 5,
        marginTop: 5,
    },
    country: {
        color: '#b71c1c',
        fontSize: 15,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    line: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1.5,
    },
    description: {
        marginHorizontal: 5,
        color: '#000000',
        marginTop: 5,
    },
    button: {
        marginHorizontal: 5,
        backgroundColor: '#f44336',
        padding: 10,
        borderRadius: 15,
        marginVertical: 20,
    },
    button_text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default styles;