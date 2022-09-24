import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AuthHomeLogo} from '../../assets/images';
import {CustomButton} from '../components';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const _styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    // marginVertical: 32,
  },
  title: {
    fontSize: 35,
    color: '#333333',
    marginVertical: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
});

function AuthHome() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flexGrow: 1}}>
        <View style={{flex: 1, padding: 15}}>
          <View style={{alignItems: 'center'}}>
            <Image source={AuthHomeLogo} style={_styles.image} />
          </View>
          <View style={{flex: 1}}>
            <View>
              <View>
                <Text style={_styles.title}>Let's you in</Text>
              </View>
              <View>
                <CustomButton
                  customTitle="Continue with Facebook"
                  onPress={() => {}}
                  customTextColor="#333333"
                  customBgColor="#fff"
                  customRadius={15}
                  customContainerStyle={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    marginBottom: 10,
                  }}
                />
                <CustomButton
                  customTitle="Continue with Google"
                  onPress={() => {}}
                  customTextColor="#333333"
                  customBgColor="#fff"
                  customRadius={15}
                  customContainerStyle={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    marginBottom: 10,
                  }}
                />
                <CustomButton
                  customTitle="Continue with Apple"
                  onPress={() => {}}
                  customTextColor="#333333"
                  customBgColor="#fff"
                  customRadius={15}
                  customContainerStyle={{
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 30,
              }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'lightgrey',
                  flex: 1,
                }}
              />
              <Text
                style={{
                  paddingHorizontal: 15,
                }}>
                or
              </Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'lightgrey',
                  flex: 1,
                }}
              />
            </View>
            <View>
              <CustomButton
                customTitle="Sign in with Phone Number"
                onPress={() => {}}
                customFontWeight="bold"
              />
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center', marginRight: 10}}>
                  Don't have an account?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#1aac4b',
                    }}>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AuthHome;
