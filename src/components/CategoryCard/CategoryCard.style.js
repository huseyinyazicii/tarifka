import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 1,
        backgroundColor: '#ECEFF1',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderWidth: 2,
        borderColor: '#E0DEDE',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 50,
        marginLeft: 5,
        borderRadius: 30,
    },
    text: {
        marginLeft: 10,
        color: '#000000',
        fontSize: 18,
    },
});

export default styles;