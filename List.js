import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';

// import { Button, StyleSheet, Text, View,  StatusBar ,  TouchableOpacity } from 'react-native';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Formadduser from './screens/Form/Formadduser';
import Formedituser from './screens/Form/Formedituser';
import Formlist from './screens/Form/Formlist';
import MyComponent  from './screens/Form/Props';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

export default class List extends Component {
    constructor(props) {
        super(props);
        
        this.state={
         
        
        }
    }
    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator initialRouteName="">
                <Stack.Screen name="Formlist" component={Formlist}  options={{ title: '' }} />
                <Stack.Screen name="Formadduser" component={Formadduser}   options={{ title: '' }} />
                <Stack.Screen name="Formedituser" component={Formedituser} iduser="2" options={{ title: '' }} />
                <Stack.Screen name="MyComponent" component={MyComponent}  textnya="21" options={{ title: '' }} />
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
