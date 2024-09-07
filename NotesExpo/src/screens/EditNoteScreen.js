import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HeaderComponent, MainComponent} from '../components/NoteComponent';
import realm from '../../store/realm';

const EditNoteScreen = props => {
  const {route, navigation} = props;
  const [dataToUpdate, setDataToUpdate] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const id = route.params.id;

  const editNote = (value, editStatus) => {
    setNewNote(value);
    setIsEdit(editStatus);
  };

  const saveNote = value => {
    if (value === '') {
      alert(`Note can't be empty!`);
    } else {
      const allData = realm.objects('Note');

      allData.forEach(item => {
        if (item.id === id && item.note !== value) {
          realm.write(() => {
            item.note = value;
            item.date = new Date().toISOString();
          });
          navigation.navigate('NoteList');
        } else if (item.id === id && item.note === value) {
          alert('Nothing changed!');
        }
      });
    }
  };

  const dateFormat = date => {
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
    const noteDate = new Date(date);
    const dateOnly = noteDate.getDate();
    const monthOnly = noteDate.getMonth();
    const yearOnly = noteDate.getFullYear();
    return months[monthOnly] + ' ' + dateOnly + ', ' + yearOnly;
  };

  useEffect(() => {
    const data = realm.objects('Note').filtered(`id = ${id}`);

    setDataToUpdate(data);
    if (data.length > 0) {
      setNewNote(data[0].note);
    }
  }, []);

  useEffect(() => {
    console.log('Edit Note Screen');
    console.log(dataToUpdate);
  }, [dataToUpdate]);

  return (
    <View style={styles.mainContainer}>
      <HeaderComponent title="Edit" onPress={() => saveNote(newNote)} />
      {dataToUpdate.length != 0 ? (
        <MainComponent
          date={dateFormat(dataToUpdate[0].date)}
          value={isEdit == true ? newNote : dataToUpdate[0].note}
          onChangeText={text => editNote(text, true)}
        />
      ) : null}
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
