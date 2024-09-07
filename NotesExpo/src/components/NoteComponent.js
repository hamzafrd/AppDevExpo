import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Constant from 'expo-constants'

export const HeaderComponent = props => {
  const { title } = props
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} {...props}>
        <Icon name="check" type="font-awesome-5" size={18} />
      </TouchableOpacity>
    </View>
  )
}

export const MainComponent = props => {
  const { date, value } = props
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.date}>{date}</Text>
      <TextInput {...props} multiline placeholder="Write here" style={styles.input} value={value} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  headerContainer: {
    padding: 8,
    paddingTop: Constant.statusBarHeight,
    backgroundColor: 'moccasin',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold'
  },
  button: {
    padding: 8
  },

  date: {
    paddingTop: 16,
    paddingLeft: 16
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    textAlignVertical: 'top'
  }
})
