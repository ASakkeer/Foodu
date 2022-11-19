import React from 'react';
import {Text, View} from 'react-native';
import {WelcomeScreen, IntroScreen} from './screens';
import {AuthHome, LoginScreen, SignupScreen} from './screens/Auth';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <LoginScreen />
    </View>
  );
}

export default App;
