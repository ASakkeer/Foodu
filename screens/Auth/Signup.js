import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AppLogo} from '../../assets/images';
import {CustomButton, TextInputView} from '../components';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const _styles = StyleSheet.create({
  image: {
    width: 150,
    height: 130,
    // marginVertical: 32,
  },
  title: {
    fontSize: 30,
    color: '#333333',
    marginVertical: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
});

function SignupScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: 15}}>
          <View style={{justifyContent: 'center', flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Image source={AppLogo} style={_styles.image} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={_styles.title}>Create New Account</Text>
            </View>
            <View>
              <TextInputView
                style={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: 15,
                  paddingVertical: 20,
                  paddingHorizontal: 30,
                  marginBottom: 20,
                }}
                placeholder="+91 0000000000"
              />
              <TextInputView
                style={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: 15,
                  paddingVertical: 20,
                  paddingHorizontal: 30,
                  marginBottom: 20,
                }}
                placeholder="Email"
              />
              <TextInputView
                style={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: 15,
                  paddingVertical: 20,
                  paddingHorizontal: 30,
                  marginBottom: 20,
                }}
                placeholder="Full Name"
              />
              <View
                style={{
                  marginTop: 15,
                }}>
                <CustomButton customTitle="Sign up" />
              </View>
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
              or continue with
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: 'lightgrey',
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomButton
              customTitle="F"
              onPress={() => {}}
              customTextColor="#333333"
              customBgColor="#fff"
              customRadius={15}
              customContainerStyle={{
                borderWidth: 1,
                borderColor: 'lightgrey',
                marginRight: 15,
              }}
            />
            <CustomButton
              customTitle="G"
              onPress={() => {}}
              customTextColor="#333333"
              customBgColor="#fff"
              customRadius={15}
              customContainerStyle={{
                borderWidth: 1,
                borderColor: 'lightgrey',
              }}
            />
            <CustomButton
              customTitle="A"
              onPress={() => {}}
              customTextColor="#333333"
              customBgColor="#fff"
              customRadius={15}
              customContainerStyle={{
                borderWidth: 1,
                borderColor: 'lightgrey',
                marginLeft: 15,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', marginRight: 10}}>
              Already have an account?
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignupScreen;
