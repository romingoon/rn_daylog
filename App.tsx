import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import Toast from 'react-native-toast-message';
import { LogContextProvider } from './src/contexts/LogContext';
import ToastConfig from './src/config/ToastConfig';
import { SearchContextProvider } from './src/contexts/SearchContext';

const App = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
          <Toast config={ToastConfig} />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};
export default App;
