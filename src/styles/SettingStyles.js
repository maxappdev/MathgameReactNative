import {StyleSheet} from 'react-native';
import appColors from "./AppColors";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: appColors.main,
    },
    item: {
        height: 150,
        width: "100%",
        borderBottomColor: appColors.third,
        borderBottomWidth: 0,
        marginBottom: 30,
        flexDirection: "row",
        alignItems: "center"
    },
    itemText: {
        color: appColors.third,
        margin: 40,
        fontFamily: "LuckiestGuy",
        fontSize: 30
    },
    itemTextRight: {
        color: appColors.text,
        margin: 40,
        fontFamily: "LuckiestGuy",
        fontSize: 30,
        backgroundColor: appColors.secondary,
        padding: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    },
    backText: {
        color: appColors.text,
        margin: 40,
        fontFamily: "LuckiestGuy",
        fontSize: 25,
        backgroundColor: appColors.third,
        padding: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    }
});

export default styles;