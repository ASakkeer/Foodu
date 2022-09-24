import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const _styles = StyleSheet.create({
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

function CustomButton(props) {
  const {customContainerStyle, customTextStyle, customTitle, onPress} = props;
  return (
    <TouchableOpacity
      style={[_styles.button, customContainerStyle]}
      onPress={onPress}>
      <Text style={[_styles.buttonText, customTextStyle]}>{customTitle}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  customTitle: PropTypes.string,
  customContainerStyle: PropTypes.object,
  customTextStyle: PropTypes.object,
  onPress: PropTypes.func,
};

CustomButton.defaultProps = {
  customTitle: '',
  customContainerStyle: {},
  customTextStyle: {},
  onPress: () => {},
};

export default CustomButton;
