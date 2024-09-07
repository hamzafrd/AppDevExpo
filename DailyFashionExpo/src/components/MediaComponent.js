import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const MediaComponent = props => {
  const {value} = props;
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Image style={styles.image} {...props} />
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
});
