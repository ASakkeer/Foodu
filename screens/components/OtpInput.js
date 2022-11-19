import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import PropTypes from 'prop-types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const _styles = StyleSheet.create({
  borderStyleBase: {
    // width: windowWidth / 5,
    // height: windowWidth / 5,
    // flex: 1,
  },

  borderStyleHighLighted: {
    borderWidth: 0,
    // flex: 1,
    borderColor: '#1aac4b',
    backgroundColor: '#1aac4b',
    color: '#000',
  },

  underlineStyleBase: {
    width: 70,
    height: 55,
    borderWidth: 0,
    // flex: 1,
    backgroundColor: '#fafbfa',
    borderRadius: 10,
    fontSize: 26,
    padding: 10,
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#1aac4b',
    backgroundColor: '#edf8f1',
    color: '#000',
  },
});

const OTPInput = props => {
  const {pinCount} = props;
  return (
    <View style={{alignItems: 'center'}}>
      <OTPInputView
        style={{width: '100%', height: 100}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={_styles.underlineStyleBase}
        codeInputHighlightStyle={_styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
};

OTPInput.propTypes = {
  pinCount: PropTypes.number,
};

OTPInput.defaultProps = {
  pinCount: 4,
};

export default OTPInput;
