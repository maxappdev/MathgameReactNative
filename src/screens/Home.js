import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native'
import styles from '../styles/HomeStyles'
import SoundClient from "../sounds/SoundClient";
import {getCoinNumber} from "../logic/services/AsyncStorageService";
import FirebaseClient from "../statistics/firebase/FirebaseClient";

const Home = (props) => {

    const [coinNumber, setCoinNumber] = useState("0");

    useEffect(() => {
        async function fetchCoinNumber() {
            let coinsFromAsync = await getCoinNumber();
            setCoinNumber(coinsFromAsync)
        }

        //called every time component shown
        props.navigation.addListener('focus', () => {
            fetchCoinNumber()
        });
    });

    const toGame = () => {
        props.navigation.navigate('Game')
        SoundClient.playSoundButtonClick()

        FirebaseClient.logEventNewGameStarted()
    }

    const toSettings = () => {
        props.navigation.navigate('Settings')
        SoundClient.playSoundButtonClick()
    }

    const toStore = () => {
        props.navigation.navigate('Store')
        SoundClient.playSoundButtonClick()
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.topBarContainer}>
                    <View style={styles.topBar}>
                        <View style={styles.coinImageContainer}>
                            <Image
                                style={styles.coinImage}
                                source={require('../../assets/images/coin.png')}
                            />
                            <Text style={styles.coinText}>
                                {coinNumber}
                            </Text>
                        </View>
                        <View style={styles.energyImageContainer}>
                            <Image
                                style={styles.energyImage}
                                source={require('../../assets/images/energy.png')}
                            />
                            <Text style={styles.energyText}>
                                {15}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.moreEnergyViewContainer} onPress={toGame}>
                            <View style={styles.moreEnergyView}>
                                <Text style={styles.moreEnergyText}>
                                    More energy
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Image
                    style={styles.image}
                    source={require('../../assets/logo.png')}
                />

                <TouchableOpacity onPress={toGame}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>
                            Play
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={toSettings}>
                    <View style={styles.buttonViewSmall}>
                        <Text style={styles.buttonTextSmall}>
                            Best results
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={toStore}>
                    <View style={styles.buttonViewSmall}>
                        <Text style={styles.buttonTextSmall}>
                            Store
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={toSettings}>
                    <View style={styles.buttonViewSmall}>
                        <Text style={styles.buttonTextSmall}>
                            Settings
                        </Text>
                    </View>
                </TouchableOpacity>

                {__DEV__ && <Text>you are in dev mode</Text>}

                {/*

                <View>
                    <Text style={styles.buttonText}>
                        Sound:
                    </Text>
                </View>

                <TouchableOpacity onPress={() => setSound(true)}>
                    <View>
                        <Text style={styles.buttonText}>
                            enable
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSound(false)}>
                    <View>
                        <Text style={styles.buttonText}>
                            disable
                        </Text>
                    </View>
                </TouchableOpacity>

                */}

                {/*
            <TouchableOpacity onPress={() => props.navigation.navigate('Records')} >
            <View style = {styles.buttonView}>
            <Text style = {styles.buttonText}>
               Records
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Records')} >
            <View style = {styles.buttonView}>
            <Text style = {styles.buttonText}>
               Settings
            </Text>
            </View>
            </TouchableOpacity>
            */}

            </View>
        </>
    );
};
export default Home
