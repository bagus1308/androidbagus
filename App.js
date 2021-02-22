import React, { Component } from 'react'
// import { View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen/HomeScreen'

const Stack = createStackNavigator();

export default class App extends Component {

  componentDidMount(){
    // console.log("mulai")
    // const data ={
    //   id: "1234",
    //   email:"bagus@gmail.com",
    //   fullname:"baguseka",
    // }
    // const usersRef = firebase.firestore().collection('users')
    //             usersRef
    //                 .doc("1234567890")
    //                 .set(data)
    //                 .then(() => {
    //                   console.log("success")
    //                   //navigation.navigate('Home', {user: data})
    //                 })
    //                 .catch((error) => {
    //                     alert(error)
    //                 });
    firestore()
  .collection('users')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });
  }

  
  render() {
    return (
     <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
       </Stack.Navigator>
     </NavigationContainer>
    )
  }
}
