import React from 'react';
import { View, Button, TouchableOpacity, Text } from "react-native"
import numberButtonsStyles from '../styles/NumberButtonsStyles'
import styles from '../styles/NumberButtonStyles'

const NumberButtonsRow = (props) => {

    const buttonsStyles = numberButtonsStyles

    return (
        <>
            <View style={buttonsStyles.buttonsRow}>
                {
                    props.buttonNames.map(number => {
                        let viewToShow = styles.buttonView

                        if(number === "C"){
                            viewToShow = styles.cancelView
                        }

                        return (
                            <TouchableOpacity  key={number} onPress={() => props.handleButtonPress(number)} >
                            <View key={number + '.key'} style = {viewToShow}>
                            <Text style = {styles.buttonText}>
                                {number}
                            </Text>
                            </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </>
    );
};
export default NumberButtonsRow