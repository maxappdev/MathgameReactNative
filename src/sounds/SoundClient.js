import {isSoundEnabled} from '../logic/services/AsyncStorageService'
import {AudioObject} from "./AudioObject";

const buttonClickSoundPath = require('../../assets/sounds/buttonClick.mp3');
const nextLevelSoundPath = require('../../assets/sounds/nextLevel.wav');
const correctAnswerSoundPath = require('../../assets/sounds/correctAnswer.mp3');
const wrongAnswerSoundPath = require('../../assets/sounds/wrongAnswer.wav');
const secondsLeftSoundPath = require('../../assets/sounds/secondsLeft.wav');
const gameLostSoundPath = require('../../assets/sounds/gameLost.wav');

const playSound = async (path) => {
    //if (await isSoundEnabled()) {
    try {
        let soundObj = await AudioObject.getInstance();
        await soundObj.unloadAsync();
        await soundObj.loadAsync(path);
        await soundObj.setStatusAsync({shouldPlay: true});
    } catch (error) {
        console.log(error)
    }
    //}
}

const playSoundButtonClick = async () => {
    await playSound(buttonClickSoundPath)
}

const playSoundNextLevel = async () => {
    await playSound(nextLevelSoundPath)
}

const playSoundCorrectAnswer = async () => {
    await playSound(correctAnswerSoundPath)
}

const playSoundWrongAnswer = async () => {
    await playSound(wrongAnswerSoundPath)
}

const playSoundSecondsLeft = async () => {
    await playSound(secondsLeftSoundPath)
}

const playSoundGameLost = async () => {
    await playSound(gameLostSoundPath)
}

export default {
    playSoundButtonClick,
    playSoundNextLevel,
    playSoundCorrectAnswer,
    playSoundWrongAnswer,
    playSoundSecondsLeft,
    playSoundGameLost
}
