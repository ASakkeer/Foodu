import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';

function TextInputView(props) {
  const {
    style,
    placeholder,
    autoCapitalize,
    allowFontScaling,
    autoCorrect,
    editable,
    keyboardType,
    maxLength,
    multiline,
    numberOfLines,
    onChangeText,
    secureTextEntry,
    value,
  } = props;
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      allowFontScaling={allowFontScaling}
      autoCorrect={autoCorrect}
      editable={editable}
      keyboardType={keyboardType}
      maxLength={maxLength}
      multiline={multiline}
      numberOfLines={numberOfLines}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
}

TextInputView.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  autoCapitalize: PropTypes.string,
  allowFontScaling: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
};

TextInputView.defaultProps = {
  style: {},
  placeholder: '',
  autoCapitalize: 'none',
  allowFontScaling: false,
  autoCorrect: false,
  editable: true,
  keyboardType: 'default',
  maxLength: null,
  multiline: false,
  numberOfLines: null,
  onChangeText: () => {},
  secureTextEntry: false,
  value: '',
};

export default TextInputView;
