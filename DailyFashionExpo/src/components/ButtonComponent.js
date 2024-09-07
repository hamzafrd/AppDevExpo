import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen-hooks';
export const ButtonComponent = props => {
  const {backgroundColor, title} = props;
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: backgroundColor,
        },
      ]}
      {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
  },
});
