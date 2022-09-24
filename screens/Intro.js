import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {IntroImageOne, IntroImageTwo, IntroImageThree} from '../assets/images';
import {CustomButton} from './components';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const slides = [
  {
    key: 'one',
    title: 'Order for Food',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: IntroImageOne,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Easy Payment',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: IntroImageTwo,
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Fast Delivery',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: IntroImageThree,
    backgroundColor: '#22bcb5',
  },
];

const _styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
  image: {
    width: windowWidth - 50,
    height: 250,
    // marginVertical: 32,
  },
  text: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 36,
    color: '#1aac4b',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paginationContainer: {
    // position: 'absolute',
    // bottom: 10,
    // left: 0,
    // right: 0,
    paddingVertical: 10,
    // height: 200,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    // flex: 1,
    paddingHorizontal: 7,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 8,
    borderRadius: 100,
    backgroundColor: '#1aac4b',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
});

function IntroScreen() {
  slider: AppIntroSlider | undefined;

  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  let slider = useRef(AppIntroSlider);

  const _renderItem = ({item}) => {
    return (
      <View
        style={[
          // _styles.slide,
          {
            backgroundColor: item.bg,
            flex: 1,
          },
        ]}>
        <View style={[_styles.slide, {flex: 2, justifyContent: 'flex-end'}]}>
          <Image source={item.image} style={_styles.image} />
        </View>
        <View style={_styles.slide}>
          <Text style={_styles.title}>{item.title}</Text>
          <Text style={_styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _keyExtractor = item => item.title;

  const _changeSlides = () => {
    if (currentSliderIndex === slides.length - 1) {
      return;
    }
    if (currentSliderIndex < slides.length - 1) {
      const nextIndex = currentSliderIndex + 1;
      setCurrentSliderIndex(nextIndex);
      slider?.goToSlide(nextIndex, true);
    }
  };

  const _renderPagination = activeIndex => {
    return (
      <View style={_styles.paginationContainer}>
        <SafeAreaView>
          <View style={_styles.paginationDots}>
            {slides.length > 1 &&
              slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    _styles.dot,
                    i === activeIndex
                      ? {backgroundColor: '#1cb278', width: 30}
                      : {backgroundColor: 'rgba(0, 0, 0, .2)'},
                  ]}
                  onPress={() => slider?.goToSlide(i, true)}
                />
              ))}
          </View>
          <View style={_styles.buttonContainer}>
            {/* <TouchableOpacity
              style={[_styles.button, {backgroundColor: '#1aac4b'}]}
              onPress={() => {
                if (currentSliderIndex === 0) {
                  return;
                }
                if (currentSliderIndex > 0) {
                  const nextIndex = currentSliderIndex - 1;
                  setCurrentSliderIndex(nextIndex);
                  slider?.goToSlide(nextIndex, true);
                }
              }}>
              <Text style={_styles.buttonText}>Previous</Text>
            </TouchableOpacity> */}
            <CustomButton
              customTitle={`${
                currentSliderIndex === slides.length - 1
                  ? 'Get Started'
                  : 'Next'
              }`}
              onPress={_changeSlides}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  };

  const _onSlideChange = index => {
    setCurrentSliderIndex(index);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        renderPagination={_renderPagination}
        data={slides}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        onSlideChange={_onSlideChange}
        ref={ref => (slider = ref)}
      />
    </View>
  );
}

export default IntroScreen;
