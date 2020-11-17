import { StyleSheet } from 'react-native';
import appColors from './AppColors'

const styles = StyleSheet.create({
    activityContainer: {
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    waitText: {
        flexDirection: 'row',
        alignItems: 'center',
        color: appColors.levelColors.level5,
        fontFamily: 'LuckiestGuy',
        fontSize: 25
    },
    coinImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        marginBottom: 10
    },
    coinImage: {
        width: 20,
        height: 20,
        margin: 2
    },
    coinText: {
        fontFamily: "LuckiestGuy",
        color: appColors.secondary,
        fontSize: 25
    },
    modalView:{
        backgroundColor: appColors.main,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsRow: {
        flexDirection: 'row',
    },
    resultText: {
        color: appColors.third,
        marginBottom: 40,
    },
    resultTextBig: {
        color: appColors.third,
        fontSize: 60,
        marginBottom: 10,
        fontFamily: 'LuckiestGuy'
    },
    buttonContainer: {
        width:"60%",
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonContinueContainer:{
        justifyContent: 'center',
        marginTop: 20
    },
    continueText : {
        fontSize: 30,
        color: appColors.text,
        fontFamily: 'LuckiestGuy'
    },
    buttonText : {
        fontSize: 25,
        color: appColors.text,
        fontFamily: 'LuckiestGuy'
    },
    buttonView : {
        color: appColors.main,
        marginBottom: 16,
        backgroundColor: appColors.secondary,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 10,
    },
    continueView : {
        color: appColors.main,
        marginBottom: 16,
        backgroundColor: appColors.levelColors.level5,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 15,
    },
    bestResult : {
        fontSize: 25,
        color: appColors.text,
        fontFamily: 'LuckiestGuy',
        margin:  10
    }
})
export default styles
