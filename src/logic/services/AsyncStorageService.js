import AsyncStorage from '@react-native-community/async-storage';

const bestResultKey = 'best_result_id0001';
const soundEnabledKey = 'sound_enabled_id0002'
const coinNumberKey = 'coin_number_id0003'

export const getBestResult = async () => {
    let result = await AsyncStorage.getItem(bestResultKey);
    if (result == null) {
        result = 0;
        AsyncStorage.setItem(bestResultKey, result.toString());
    }
    return result;
};

export const getCoinNumber = async () => {
    let result = await AsyncStorage.getItem(coinNumberKey);
    if (result == null) {
        result = "0";
        AsyncStorage.setItem(coinNumberKey, result);
    }
    return result;
};

export const setCoinNumber = async (value) => {
    let numberStr = value.toString();
    AsyncStorage.setItem(coinNumberKey, numberStr);
    return true;
};

export const addCoins = async (value) => {
    let coins = await getCoinNumber();
    let newNumber = parseInt(coins) + parseInt(value);
    await setCoinNumber(newNumber.toString())
};

export const addBestResult = async (newResult) => {
    let oldResult = await getBestResult();
    let result = oldResult;
    if (parseInt(oldResult) < parseInt(newResult)) {
        result = newResult;
        AsyncStorage.setItem(bestResultKey, result.toString());
    }
    return result;
};

export const isSoundEnabled = async () => {
    let result = await AsyncStorage.getItem(soundEnabledKey);
    if (result == null) {
        result = 1;
        AsyncStorage.setItem(soundEnabledKey, result.toString);
    }
    return (parseInt(result) === 1);
}

export const setSoundEnabled = async (value) => {
    let stringToStore = "0";
    if (value) {
        stringToStore = "1";
    }
    AsyncStorage.setItem(soundEnabledKey, stringToStore);
    return true;
};
