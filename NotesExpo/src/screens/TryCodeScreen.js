import React from 'react';
import {View, StyleSheet} from 'react-native';
const TryCodeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.blueBox} />
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.blueBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  secondContainer: {
    padding: 16,
    margin: 16,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'mistyrose',
  },
  blueBox: {
    backgroundColor: 'blue',
    width: '25%',
    height: '25%',
    borderWidth: 1,
  },
  redBox: {
    backgroundColor: 'red',
    width: '25%',
    height: '25%',
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default TryCodeScreen;
