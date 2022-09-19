import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {WelcomeBG} from '../assets/images';

const image = {uri: WelcomeBG};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.3,
    zIndex: 1,
  },
  contentContainer: {
    zIndex: 5,
    paddingVertical: 30,
    paddingHorizontal: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    color: '#1aac4b',
    marginBottom: 15,
    fontWeight: '700',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 30,
  },
});

function WelcomeScreen() {
  return (
    <View style={_styles.container}>
      <ImageBackground
        source={WelcomeBG}
        resizeMode="cover"
        style={_styles.image}>
        <View style={_styles.overlay} />
        <View style={_styles.contentContainer}>
          <Text style={_styles.title}>Welcome to Foodu</Text>
          <Text style={_styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;
