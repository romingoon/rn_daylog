import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feeds';

  const nameMap: { [key: string]: string } = {
    Feeds: '피드',
    Calendar: '캘린더',
    Search: '검색',
  };
  return nameMap[routeName];
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MainTab'
        component={MainTab}
        options={({ route }: any) => ({ title: getHeaderTitle(route) })}
      />
      <Stack.Screen name='Write' component={WriteScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
