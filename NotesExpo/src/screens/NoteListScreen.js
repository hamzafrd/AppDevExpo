/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, FlatList, TextInput } from 'react-native'
import { CheckBox, Icon } from 'react-native-elements'
import realm from '../../store/realm'
import Constant from 'expo-constants'

const NoteListScreen = props => {
  const { navigation } = props
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isEdit, setIsEdit] = useState(false)

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
      'December'
    ]
    const noteDate = new Date(date)
    const dateOnly = noteDate.getDate()
    const monthOnly = noteDate.getMonth()
    const yearOnly = noteDate.getFullYear()
    return months[monthOnly] + ' ' + dateOnly + ', ' + yearOnly
  }

  const setCheckBox = (id, status) => {
    const newData = data.map(item => {
      if (item.id === id) {
        item.checkedStatus = !status
      }
      return item
    })
    setData(newData)
  }

  const removeNotes = () => {
    const checkTrue = []
    data.forEach(item => {
      if (item.checkedStatus) {
        checkTrue.push(item.id)
      }
    })
    if (checkTrue.length !== 0) {
      realm.write(() => {
        for (let i = 0; i < checkTrue.length; i++) {
          const dataById = realm.objects('Note').filtered(`id = ${checkTrue[i]}`)
          realm.delete(dataById)
        }
      })
      const collect = realm.objects('Note').sorted('date', true)
      const newData = collect.map(item => {
        item.checkedStatus = false
        return item
      })
      setData(newData)
      setIsEdit(false)
    } else {
      alert('Nothing to remove!')
    }
  }

  const searchData = value => {
    const dataFromDatabase = realm.objects('Note').sorted('date', true)

    const searchedData = dataFromDatabase.filter(item => {
      const itemData = item.note.toLowerCase()
      const valueData = value.toLowerCase()
      return itemData.indexOf(valueData) > -1
    })

    setData(searchedData)
    setSearchText(value)
  }

  useEffect(() => {
    const noteListPage = navigation.addListener('focus', () => {
      const notes = realm.objects('Note')
      const notesByDates = notes.sorted('date', true)

      const newData = notesByDates.map(item => {
        item.checkedStatus = false
        return item
      })

      console.log(newData)
      setData(newData)
    })
    return noteListPage
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Notes</Text>
        {data.length !== 0 ? (
          <TouchableOpacity style={styles.editButton} onPress={() => setIsEdit(!isEdit)}>
            {isEdit === true ? <Text>Cancel</Text> : <Text>Edit</Text>}
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.searchBox}>
            <Icon name="search" type="font-awesome" size={18} style={styles.searchIcon} color="grey" />
            <TextInput
              placeholder="Search here"
              style={styles.searchInput}
              onChangeText={text => searchData(text)}
              value={searchText}
            />
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.mainDataContainer}>
              <TouchableOpacity
                style={styles.noteButton}
                onPress={() => navigation.navigate('EditNote', { id: item.id })}>
                <View style={styles.noteContainer}>
                  <Text style={styles.noteText}>{item.note}</Text>
                </View>
                <Text style={styles.dateText}>{dateFormat(item.date)}</Text>
              </TouchableOpacity>

              {isEdit ? (
                <CheckBox
                  size={20}
                  containerStyle={styles.checkBox}
                  onPress={() => setCheckBox(item.id, item.checkedStatus)}
                  checked={item.checkedStatus}
                />
              ) : null}
            </View>
          )
        }}
        keyboardShouldPersistTaps={'handled'}
        ListEmptyComponent={
          <View style={{ marginTop: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>No Items</Text>
          </View>
        }
      />
      <View style={styles.buttonContainer}>
        {isEdit ? (
          <TouchableOpacity style={styles.deleteButton} onPress={() => removeNotes()}>
            <Icon name="delete" type="antdesign" size={20} color="white" />
            <View style={styles.containerDeleteText}>
              <Text style={styles.deleteText}>Delete</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateNote')}>
            <Icon name="plus" type="antdesign" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: 'red',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerDeleteText: {
    marginLeft: 8
  },
  deleteText: {
    color: 'white'
  },

  checkBox: {
    paddingRight: 0,
    paddingLeft: 0
  },

  editButton: {
    position: 'absolute',
    padding: 16,
    right: 8
  },

  mainContainer: { flex: 1, backgroundColor: 'white' },
  headerContainer: {
    padding: 8,
    paddingTop: Constant.statusBarHeight,
    backgroundColor: 'moccasin',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: { fontSize: 20, padding: 8, fontWeight: 'bold' },
  buttonContainer: { position: 'absolute', bottom: 16, right: 16 },
  addButton: { backgroundColor: 'pink', padding: 16, borderRadius: 100 },
  flatListContainer: {
    padding: 8
  },
  mainDataContainer: {
    margin: 8,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  noteButton: {
    flex: 1,
    margin: 8,
    padding: 8
  },
  noteContainer: {
    maxHeight: 40,
    paddingBottom: 10
  },
  noteText: {
    textAlign: 'justify'
  },
  dateText: {
    fontSize: 12
  },

  searchBox: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 8,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center'
  },
  searchIcon: {
    padding: 8,
    paddingRight: 0
  },
  searchInput: {
    height: 30,
    padding: 8,
    flex: 1
  }
})

export default NoteListScreen
