import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Navbar, OTPInput, CustomButton} from '../components';

function OTPScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navbar
        title="OTP Code Verification"
        isBack={true}
        backAction={() => {}}
      />
      <View style={{flex: 1, padding: 15}}>
        <View style={{flex: 1}}>
          <View style={{paddingVertical: 20, alignItems: 'center'}}>
            <Text>Code has been send to +91 79xxxxxx01</Text>
          </View>
          <View
            style={{
              paddingVertical: 20,
              justifyContent: 'center',
              paddingHorizontal: 15,
            }}>
            <OTPInput pinCount={4} />
          </View>
          <View
            style={{
              paddingVertical: 20,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>Resend OTP in</Text>
            <Text style={{fontSize: 18, color: '#1aac4b'}}> 45 </Text>
            <Text>seconds</Text>
          </View>
        </View>

        <CustomButton
          customTitle="Verify"
          onPress={() => {}}
          customFontWeight="bold"
          customTextColor="#fff"
        />
      </View>
    </SafeAreaView>
  );
}

export default OTPScreen;
