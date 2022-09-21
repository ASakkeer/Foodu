import React from 'react';
import {Text, View} from 'react-native';
import {WelcomeScreen, IntroScreen} from './screens';

function App() {
  return (
    <View style={{flex: 1}}>
      <IntroScreen />
    </View>
  );
}

export default App;
