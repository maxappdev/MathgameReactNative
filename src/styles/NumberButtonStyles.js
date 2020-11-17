import { StyleSheet } from 'react-native';
import appColors from './AppColors'

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center',
        backgroundColor: appColors.main,
    },
    image : {
        marginTop: 20,
        maxHeight: 120,
        maxWidth: 120
    },
    label : {
        marginBottom: 130,
        fontSize: 16,
        color: appColors.text,
    },
    buttonText : {
        fontSize: 25,
        color: appColors.third,
        fontFamily: 'LuckiestGuy',
    },
    buttonView : {
        color: appColors.main,
        backgroundColor: appColors.numberButtons,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    cancelView : {
        color: appColors.main,
        backgroundColor: appColors.cancel,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    }
})
export default styles
