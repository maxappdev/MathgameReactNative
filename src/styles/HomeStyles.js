import {StyleSheet} from 'react-native';
import appColors from './AppColors'

const styles = StyleSheet.create({
    topBarContainer: {
        backgroundColor: appColors.secondary,
        width: "100%",
        height: 70,
        position: "relative"
    },
    topBar: {
        position: "absolute",
        flexDirection: "row",
        bottom: 0
    },
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: appColors.main,
    },
    coinImageContainer: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    coinImage: {
        width: 20,
        height: 20,
        margin: 2
    },
    coinText: {
        fontFamily: "LuckiestGuy",
        color: appColors.text,
        fontSize: 25
    },
    energyImageContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    energyImage: {
        width: 20,
        height: 20,
        margin: 2
    },
    energyText: {
        fontFamily: "LuckiestGuy",
        color: appColors.text,
        fontSize: 25
    },
    image: {
        marginTop: 40,
        maxHeight: 120,
        maxWidth: 120
    },
    moreEnergyViewContainer: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    moreEnergyView: {
        backgroundColor: appColors.third,
        padding: 3,
        marginLeft: 5,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    moreEnergyText: {
        color: appColors.text,
        fontFamily: "LuckiestGuy",
        fontSize: 13,
    },
    imageAppName: {
        maxWidth: 220,
    },
    label: {
        fontFamily: "LuckiestGuy",
        marginBottom: 100,
        fontSize: 40,
        color: appColors.text,
    },
    buttonText: {
        fontFamily: "LuckiestGuy",
        fontSize: 40,
        color: appColors.text,
        textAlignVertical: "center",
        textAlign: "center",
    },
    buttonView: {
        textAlign: 'center',
        justifyContent: 'center',
        width: 170,
        color: appColors.main,
        marginTop: 80,
        marginBottom: 25,
        backgroundColor: appColors.secondary,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    buttonTextSmall: {
        fontFamily: "LuckiestGuy",
        fontSize: 20,
        color: appColors.text,
        textAlignVertical: "center",
        textAlign: "center",
    },
    buttonViewSmall: {
        textAlign: 'center',
        justifyContent: 'center',
        width: 120,
        color: appColors.main,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: appColors.third,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16,
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
