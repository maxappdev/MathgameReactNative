import analytics from '@react-native-firebase/analytics';

const testEventName = 'test_event_id0001';
const eventVideoAdDisplayed = 'video_ad_displayed_id0001';
const eventNewGameStarted = 'new_game_started_id0001';


const initialize = () => {
    //TODO delete it
};

const logTestEvent = () => {
    logEventWithoutProps(testEventName);
};

const logEventWithoutProps = (eventName) => {
    logEvent(eventName, {});
};

const logEvent = (eventName, eventProps) => {
    analytics().logEvent(eventName, eventProps);
};

const logEventNewGameStarted = () => {
    logEventWithoutProps(eventNewGameStarted);
};

const logEventVideoAdDisplayed = () => {
    logEventWithoutProps(eventVideoAdDisplayed);
};

export default {
    initialize,
    logEventWithoutProps,
    logEvent,
    logTestEvent,
    logEventNewGameStarted,
    logEventVideoAdDisplayed,
};
