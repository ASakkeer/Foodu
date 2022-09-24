import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const _styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

function CustomButton(props) {
  const {
    customContainerStyle,
    customTextStyle,
    customTitle,
    onPress,
    customBgColor,
    customRadius,
    customFontWeight,
    customTextColor,
    leftComponent,
    rightComponent,
  } = props;
  return (
    <TouchableOpacity
      style={[
        _styles.button,
        {
          backgroundColor: customBgColor,
          borderRadius: customRadius,
        },
        customContainerStyle,
      ]}
      onPress={onPress}>
      {leftComponent && leftComponent}
      <Text
        style={[
          _styles.buttonText,
          {
            fontWeight: customFontWeight,
            color: customTextColor,
          },
          customTextStyle,
        ]}>
        {customTitle}
      </Text>
      {rightComponent && rightComponent}
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  customTitle: PropTypes.string,
  customContainerStyle: PropTypes.object,
  customTextStyle: PropTypes.object,
  onPress: PropTypes.func,
  customBgColor: PropTypes.string,
  customRadius: PropTypes.number,
  customFontWeight: PropTypes.string,
  customTextColor: PropTypes.string,
  leftComponent: PropTypes.node,
  rightComponent: PropTypes.node,
};

CustomButton.defaultProps = {
  customTitle: '',
  customContainerStyle: {},
  customTextStyle: {},
  onPress: () => {},
  customBgColor: '#1aac4b',
  customRadius: 100,
  customFontWeight: '500',
  customTextColor: '#fff',
  leftComponent: null,
  rightComponent: null,
};

export default CustomButton;
