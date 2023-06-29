import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogContext from '../contexts/LogContext';
const CalendarScreen = () => {
  const { text }: any = useContext(LogContext);
  return (
    <View style={styles.block}>
      <Text style={styles.text}>text : {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default CalendarScreen;
