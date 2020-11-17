import {StyleSheet} from 'react-native';
import appColors from './AppColors';

const appStyles = StyleSheet.create({
    infoTextView: {
        margin: 10,
        flexDirection: 'row',
        height: 30,
        justifyContent: "space-between",
        alignItems: 'baseline',
    },
    lifeImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    lifeImage: {
        width: 20,
        height: 20,
        margin: 2
    },
    infoView: {
        margin: 5,
        padding: 10,
        height: 100,
        backgroundColor: appColors.secondary,
        borderRadius: 15,
        flex: 1,
        alignItems: "center"
    },
    pointsText: {
        fontFamily: 'LuckiestGuy',
        color: '#fff',
        fontSize: 43,
    },
    pointsLabelText: {
        fontFamily: 'LuckiestGuy',
        color: '#fff',
        fontSize: 16,
    },
    equationView: {
        marginTop: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    equation: {
        color: '#fff',
        fontSize: 70,
        fontFamily: 'LuckiestGuy'
    },
    answerView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        marginBottom: 10,
    },
    answer: {
        color: appColors.third,
        fontSize: 20,
        fontFamily: 'LuckiestGuy'
    }
});

export default appStyles
