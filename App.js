import React from 'react';
import {Text, View} from 'react-native';
import {WelcomeScreen, IntroScreen} from './screens';
import {AuthHome, LoginScreen, OTPScreen, SignupScreen} from './screens/Auth';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <OTPScreen />
    </View>
  );
}

export default App;
