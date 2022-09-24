import React from 'react';
import {Text, View} from 'react-native';
import {WelcomeScreen, IntroScreen} from './screens';
import {AuthHome} from './screens/Auth';

function App() {
  return (
    <View style={{flex: 1}}>
      <AuthHome />
    </View>
  );
}

export default App;
