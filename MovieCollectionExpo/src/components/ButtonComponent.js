import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export function ButtonComponent(props) {
  return (
    <View style={styles.mainButtonContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity {...props}>
          <Text>DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainButtonContainer: {
    alignItems: 'baseline',
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#cce6cc',
  },
});
