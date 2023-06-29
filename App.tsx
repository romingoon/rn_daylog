import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import { LogContextProvider } from './src/contexts/LogContext';
const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
};
export default App;
