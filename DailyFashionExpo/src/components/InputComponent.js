import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

export const InputComponent = props => {
  const {isDescription, isIcon} = props;
  return (
    <View style={styles.mainContainer}>
      {isIcon ? <Icon size={20} {...props} /> : null}
      <TextInput
        style={[styles.input, {height: isDescription ? 100 : 40}]}
        multiline={true}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 8,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    textAlignVertical: 'bottom',
    fontSize: 16,
    width: '100%',
  },
});
