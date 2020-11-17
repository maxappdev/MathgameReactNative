//import {AdMobRewarded} from 'expo-ads-admob';
import FirebaseClient from "../statistics/firebase/FirebaseClient";

/*const rewardedVideoRewardEventName = "rewardedVideoDidRewardUser";
const rewardedVideoOpenEventName = "rewardedVideoDidOpen";
const rewardedVideoFailEventName = "rewardedVideoDidFailToLoad";*/

function getRewardedVideoId() {
    let testVideoId = 'ca-app-pub-3940256099942544/1712485313';

    const productionVideoIdAndroid = Platform.select({
        ios: 'ca-app-pub-8616280579479916/7070405305',
        android: 'ca-app-pub-8616280579479916/5767070100',
    });

    let result = productionVideoIdAndroid;

    if (__DEV__) {
        result = testVideoId;
    }

    return result;
}

const showRewardedVideoAd = async (props) => {

    //FirebaseClient.logEventVideoAdDisplayed();

    //const rewardedVideoId = getRewardedVideoId();

    //await AdMobRewarded.addEventListener(rewardedVideoRewardEventName, props.onReward)
    //await AdMobRewarded.addEventListener(rewardedVideoFailEventName, props.onFail)
    //await AdMobRewarded.addEventListener(rewardedVideoOpenEventName, props.onOpen)

    //await AdMobRewarded.setAdUnitID(rewardedVideoId);
    //await AdMobRewarded.requestAdAsync();
    //await AdMobRewarded.showAdAsync();

}

export default {
    showRewardedVideoAd
}
