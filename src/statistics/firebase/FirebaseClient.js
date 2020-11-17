//import * as firebase from 'firebase';
//import * as Analytics from 'expo-firebase-analytics';

const testEventName = "test_event_id0001"
const eventVideoAdDisplayed = "video_ad_displayed_id0001"
const eventNewGameStarted = "new_game_started_id0001"

let firebaseConfig = {
    apiKey: "AIzaSyBz4SABYAoKefeLGK8Ux36V_fSiHod6yZU",
    authDomain: "equations-game.firebaseapp.com",
    databaseURL: "https://equations-game.firebaseio.com",
    projectId: "equations-game",
    storageBucket: "equations-game.appspot.com",
    messagingSenderId: "330044784253",
    appId: "1:330044784253:web:5382548c70d878c247fb14",
    measurementId: "G-5WPCW69TYR"
};

const isInitialized = () => {
    //return !(!firebase.apps.length);
}

const initialize = () => {
    if (!isInitialized()) {
        //firebase.initializeApp(firebaseConfig);

        if (__DEV__) {
            //Analytics.setDebugModeEnabled(true)
        }
    }
}

const logTestEvent = () => {
    logEventWithoutProps(testEventName)
}

const logEventWithoutProps = (eventName) => {
    logEvent(eventName, {});
}

const logEvent = (eventName, eventProps) => {
    if (isInitialized()) {
        //Analytics.logEvent(eventName, eventProps);
    }
}

const logEventNewGameStarted = () => {
    logEventWithoutProps(eventNewGameStarted)
}

const logEventVideoAdDisplayed = () => {
    logEventWithoutProps(eventVideoAdDisplayed)
}

export default {
    initialize,
    logEventWithoutProps,
    logEvent,
    logTestEvent,
    logEventNewGameStarted,
    logEventVideoAdDisplayed
}
