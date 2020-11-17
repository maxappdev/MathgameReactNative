import React, {useEffect, useState} from 'react';
import {Image, Text, View,} from 'react-native';
import NumberButtons from '../components/NumberButtons'
import {useInterval} from '../logic/services/TimerService'
import {generateEquation} from '../logic/factories/EquationFactory'
import {solveEquation} from '../logic/services/EquationService'
import appStyles from '../styles/AppStyles'
import appColors from '../styles/AppColors'
import ResultModal from '../components/ResultModal'
import Level from '../logic/models/Level';
import {pageMountedFirstTime} from '../logic/services/PageRenderService'
import {maxLevelNr} from '../logic/models/Level'
import SoundClient from "../sounds/SoundClient";
import AdvertisingClient from "../advertising/AdvertisingClient";
import FirebaseClient from "../statistics/firebase/FirebaseClient";

const Game = (props) => {

    const timerDelayInMs = 1000;
    const timerDelayInSec = timerDelayInMs / 1000;
    const maxAnswerLength = 10;
    const mountedFirstTime = pageMountedFirstTime();

    const [levelDuration, setLevelDuration] = useState(1);
    const [points, setPoints] = useState(0);
    const [levelNr, setLevelNr] = useState(1);
    const [timerDurationInSec, setTimerDuration] = useState(Level.levelNumber[levelNr].duration);
    const [equation, setEquation] = useState(generateEquation(levelNr));
    const [answer, setAnswer] = useState("");
    const [timeoutVal, setTimeoutVal] = useState(timerDurationInSec);
    const [timerRunning, setTimerRunning] = useState(true);
    const [resultModalVisible, setResultModalVisible] = useState(false);
    const [secondChancePossible, setSecondChancePossible] = useState(true);
    const [adLoading, setAdLoading] = useState(false);
    const [lives, setLives] = useState([1, 2, 3]);

    useInterval(() => {
        setTimeoutVal(timeoutVal - timerDelayInSec);
        if (timeoutVal == 0) {
            gameLost()
            setTimeoutVal(Level.levelNumber[levelNr].duration);
        }
        if (timeoutVal == 3) {
            SoundClient.playSoundSecondsLeft()
        }
    }, timerRunning ? timerDelayInMs : null);

    useEffect(() => {
        if (!mountedFirstTime) {
            checkAnswer()
        }
    }, [answer]);

    useEffect(() => {
        if (!mountedFirstTime) {
            checkPoints()
        }
    }, [points]);

    useEffect(() => {
        if (!mountedFirstTime) {
            setEquation(generateEquation(levelNr))
        }
    }, [levelNr]);

    useEffect(() => {
        if (!mountedFirstTime) {
            const levelDuration = Level.levelNumber[levelNr].duration;
            setTimerDuration(levelDuration);
            setTimeoutVal(levelDuration)
        }
    }, [equation]);

    const decreaseLifeOrLose = () => {
        setLives(lives.slice(0, -1))
        setAnswer("")

        if (lives.length === 1) {
            gameLost()
        }
    }

    const checkAnswer = () => {
        let correctAnswer = solveEquation(equation)
        if (answer != "" && answer == correctAnswer) {
            setAnswer("");
            setPoints(points + 1)
        }
        if (answer != "" && answer.length == correctAnswer.toString().length && answer != correctAnswer) {
            SoundClient.playSoundWrongAnswer()
            decreaseLifeOrLose()
        }
    };

    const changeTimeBar = () => {
        return timeoutVal * (100 / timerDurationInSec) + '%'
    };

    function isLevelUp() {
        return (points !== 0) &&
            (Level.levelNumber[levelNr].durationInEquations === levelDuration) &&
            ((levelNr + 1) <= maxLevelNr);
    }

    const checkPoints = () => {
        if (points === 0) {
            setLevelNr(1)
            setSecondChancePossible(true)
        } else if (isLevelUp()) {
            setLevelNr(levelNr + 1)
            SoundClient.playSoundNextLevel()
            setLevelDuration(1)
        } else {
            SoundClient.playSoundCorrectAnswer()
            setEquation(generateEquation(levelNr))
            setLevelDuration(levelDuration + 1)
        }
    };

    const gameLost = () => {
        SoundClient.playSoundGameLost()
        setTimerRunning(false);
        setResultModalVisible(true);
        setLevelDuration(1)
        setLives([1, 2, 3])
    };

    const backToMenu = () => {
        props.navigation.navigate('Home')
        SoundClient.playSoundButtonClick()
    };

    const newGame = () => {
        setPoints(0);
        setAnswer("");
        setResultModalVisible(false);
        setTimerRunning(true)
        setLevelDuration(1)
        setSecondChancePossible(true)

        FirebaseClient.logEventNewGameStarted();
    };

    const continueGameOnAddReward = () => {
        setEquation(generateEquation(levelNr));
        setAnswer("");
        setTimerRunning(true);
        setResultModalVisible(false)

        if (setSecondChancePossible) {
            setSecondChancePossible(false)
        }
        if (setAdLoading) {
            setAdLoading(false)
        }
    }

    const continueGameOnAddOpen = () => {
        setAdLoading(false)
    }

    const continueGame = async () => {
        setAdLoading(true);
        await AdvertisingClient.showRewardedVideoAd({
            onReward: continueGameOnAddReward,
            onFail: continueGameOnAddReward,
            onOpen: continueGameOnAddOpen,
        })
    };

    const addToAnswer = (symbol) => {
        if ((answer.length < maxAnswerLength) || (symbol == "C")) {
            (symbol == "C") ? setAnswer("") : setAnswer(answer + symbol)
        }
    };

    return (
        <>
            <View style={{
                height: '100%',
                backgroundColor: Level.levelNumber[levelNr].color,
            }}>
                <ResultModal backToMenu={backToMenu} continueGame={continueGame} newGame={newGame} points={points}
                             isVisible={resultModalVisible} secondChancePossible={secondChancePossible}
                             adLoading={adLoading}> </ResultModal>
                <View style={
                    {
                        width: changeTimeBar(),
                        height: 40,
                        backgroundColor: appColors.secondary,
                    }
                }>
                </View>
                <View style={appStyles.infoTextView}>
                    <View style={appStyles.infoView}>
                        <Text style={appStyles.pointsText}>{points}</Text>
                        <Text style={appStyles.pointsLabelText}>Points</Text>
                    </View>
                    <View style={appStyles.infoView}>
                        <Text style={appStyles.pointsText}>{levelNr}</Text>
                        <Text style={appStyles.pointsLabelText}>Level</Text>
                    </View>
                </View>
                <View id="equation-view" style={appStyles.equationView}>
                    <Text id="equation" style={appStyles.equation}>{equation.print()}</Text>
                </View>
                <View style={appStyles.lifeImageContainer}>
                    {lives.map(n => (
                        <Image
                            key={n}
                            style={appStyles.lifeImage}
                            source={require('../../assets/images/life.png')}
                        />
                    ))}
                </View>
                <View id="answer-view" style={appStyles.answerView}>
                    <Text style={appStyles.answer} id="answer">{answer}</Text>
                </View>
                <NumberButtons handleButtonPress={addToAnswer}></NumberButtons>
            </View>
        </>
    );
};

export default Game;
