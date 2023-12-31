import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconProps } from '../../types';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../components/SearchHeader';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }: IconProps) => {
          let iconName;

          if (route.name === 'Feeds') {
            iconName = focused ? 'ios-journal-sharp' : 'ios-journal-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-sharp';
          }

          return <Ionicons name={iconName as string} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#F43F5E',
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name='Feeds' component={FeedsScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Calendar' component={CalendarScreen} options={{ headerShown: false }} />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='search-outline' color={color} size={size} />,
          headerTitle: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
