import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const Navbar = props => {
  const {title, subTitle, isBack, backAction} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
      }}>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 5,
        }}>
        <TouchableOpacity onPress={backAction}>
          <Text> Back </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 5}}>
        {!!title && <Text>{title}</Text>}
        {!!subTitle && <Text>{subTitle}</Text>}
      </View>
      {/* <View>

        </View> */}
    </View>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  isBack: PropTypes.bool,
  backAction: PropTypes.func,
};

Navbar.defaultProps = {
  title: '',
  subTitle: '',
  isBack: false,
  backAction: () => {},
};

export default Navbar;
