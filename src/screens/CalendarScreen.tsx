import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { View, Text, StyleSheet } from 'react-native';

const CalendarScreen = () => {
  const id = uuidv4();
  console.log(id);
  return (
    <View style={styles.block}>
      <Text> CalendarScreen</Text>
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
