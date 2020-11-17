import React, {useEffect, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/ResultModalStyles'
import {addBestResult, addCoins} from "../logic/services/AsyncStorageService";
import {ActivityIndicator} from "react-native";
import appColors from "../styles/AppColors";

const ResultModal = (props) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function changeResult() {
            let updatedResult = await addBestResult(props.points);
            setResult(updatedResult)
            await addCoins(props.points)
        }

        changeResult();
    }, [props.isVisible]);

    return (
        <>
            <Modal transparent={false} visible={props.isVisible} animationType="slide">
                <View style={styles.modalView}>
                    <View>
                        <Text style={styles.bestResult}>Best: {result} Points</Text>
                    </View>
                    <View>
                        <Text style={styles.resultTextBig}>{props.points} Points</Text>
                    </View>
                    <View style={styles.coinImageContainer}>
                        <Image
                            style={styles.coinImage}
                            source={require('../../assets/images/coin.png')}
                        />
                        <Text style={styles.coinText}>
                            + {props.points}
                        </Text>
                    </View>
                    {props.secondChancePossible &&
                    <TouchableOpacity onPress={props.continueGame}>
                        <View style={styles.continueView}>
                            <Text style={styles.continueText}>
                                Second Chance
                            </Text>
                        </View>
                    </TouchableOpacity>
                    }
                    {props.adLoading &&
                    <View>
                        <View style={[styles.activityContainer, styles.horizontal]}>
                            <ActivityIndicator size="large" color={appColors.levelColors.level5}/>
                        </View>
                        <View>
                            <Text style={styles.waitText}>
                                Wait a second
                            </Text>
                        </View>
                    </View>
                    }
                    <View style={styles.buttonsRow}>
                        <TouchableOpacity onPress={props.newGame}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>
                                    New Game
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.backToMenu}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>
                                    To Menu
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};
export default ResultModal
