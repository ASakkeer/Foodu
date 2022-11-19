import React from 'react';
import {Text, View} from 'react-native';
import {WelcomeScreen, IntroScreen, HomeScreen} from './screens';
import {AuthHome, LoginScreen, OTPScreen, SignupScreen} from './screens/Auth';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HomeScreen />
    </View>
  );
}

export default App;
