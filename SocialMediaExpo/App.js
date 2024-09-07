import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigator from './src/navigator/MainNavigator'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { profileReducer } from './store/reducers/profileReducers'
import { StatusBar } from 'expo-status-bar'

const rootReducer = combineReducers({
  profileReducer: profileReducer
})

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
