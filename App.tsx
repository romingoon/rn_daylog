import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import Toast from 'react-native-toast-message';
import { LogContextProvider } from './src/contexts/LogContext';
import ToastConfig from './src/config/ToastConfig';

const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
        <Toast config={ToastConfig} />
      </LogContextProvider>
    </NavigationContainer>
  );
};
export default App;
