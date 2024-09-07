import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Screens from './src/screens/WinScreens';
import Navigator from './src/navigator/Navigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
