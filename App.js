import React, {useState} from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Game from './src/screens/Game'
import Home from './src/screens/Home'
import Records from './src/screens/Records'
import Settings from "./src/screens/Settings";
import Store from "./src/screens/Store";
import FirebaseClient from "./src/statistics/firebase/FirebaseClient";
//import * as Font from 'expo-font';
//import {AppLoading} from 'expo';

//const fetchFonts = () => {
    //return Font.loadAsync({
        //'LuckiestGuy': require('./assets/fonts/LuckiestGuy.ttf'),
    //});
//};

//FirebaseClient.initialize()

const Stack = createStackNavigator();

const App = () => {

    //const [dataLoaded, setDataLoaded] = useState(false);

    /*
    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        );
    }
    */

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerShown: false
                }
            }>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Game" component={Game}/>
                <Stack.Screen name="Records" component={Records}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="Store" component={Store}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

