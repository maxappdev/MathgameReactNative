import React from 'react'
import {Text, View, TouchableOpacity} from "react-native";
import styles from '../styles/SettingStyles'

const Settings = (props) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>Sound:</Text>
                    <TouchableOpacity>
                        <Text style={styles.itemTextRight}>Disable</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
        </>
    );

};
export default Settings