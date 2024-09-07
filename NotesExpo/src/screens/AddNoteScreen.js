import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import realm from '../../store/realm';
import {HeaderComponent, MainComponent} from '../components/NoteComponent';

const AddNoteScreen = props => {
  const {navigation} = props;
  const [tempNote, setTempNote] = useState('');

  const getCurrentDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentDate = new Date();
    const dateOnly = currentDate.getDate();
    const monthOnly = currentDate.getMonth();
    const yearOnly = currentDate.getFullYear();
    return months[monthOnly] + ' ' + dateOnly + ', ' + yearOnly;
  };

  const saveNote = newNote => {
    const allData = realm.objects('Note');
    const dataLength = allData.length;
    let lastIdFromRealm = 0;

    if (dataLength !== 0) {
      lastIdFromRealm = allData[dataLength - 1].id;
    }

    if (newNote !== '') {
      realm.write(() => {
        realm.create('Note', {
          id: lastIdFromRealm + 1,
          note: newNote,
          date: new Date().toISOString(),
        });
      });

      console.log(allData);
      alert('Successfully save your note!');
      navigation.navigate('NoteList');
    } else {
      alert('Empty note!');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderComponent title={'Create'} onPress={() => saveNote(tempNote)} />
      <MainComponent
        date={getCurrentDate()}
        onChangeText={text => setTempNote(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default AddNoteScreen;
