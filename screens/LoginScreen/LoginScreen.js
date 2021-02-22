import React, { Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
        
        email:"",
        password:"",
    
        
        }
        
        
        }

    goToRegistration = () =>{
        //console.log("Test Button")
        this.props.navigation.navigate('RegisterScreen')
    }

    render() {
        return (
            <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/ic_launcher.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    // onChangeText={(text) => setEmail(text)}
                    // value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    // onChangeText={(text) => setPassword(text)}
                    // value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    // onPress={() => onLoginPress()}
                    onPress={() => this.props.navigation.navigate("HomeScreen")}
                    >
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={this.goToRegistration} style={styles.footerLink}>Sign up</Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
        )
    }
}
