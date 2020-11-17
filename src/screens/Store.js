import React from 'react'
import {Text, View, TouchableOpacity, Image} from "react-native";
import styles from '../styles/StoreStyles'

const Settings = (props) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.itemViewLeft}>
                        <Text style={styles.itemViewLeftText}>
                            +3
                        </Text>
                        <Text style={styles.itemViewLeftText}>
                            l
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.itemViewRight}>
                        <Text style={styles.itemViewLeftText}>
                            100
                        </Text>
                        <Text style={styles.itemViewLeftText}>
                            c
                        </Text>
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